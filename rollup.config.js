import path from 'node:path';
import { fileURLToPath } from 'node:url';

import typescript from '@rollup/plugin-typescript';
import { globSync } from 'glob';
import inlineImports from 'postcss-import';
import importGlob from 'postcss-import-ext-glob';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

const componentFiles = Object.fromEntries(
  globSync('components/**/*.ts', {
    ignore: 'components/**/*.stories.ts',
  }).map((file) => [
    // This removes `components/` as well as the file extension from each
    // file, so components/nested/foo.js becomes nested/foo
    path.relative(
      'components',
      file.slice(0, file.length - path.extname(file).length),
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // components/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url)),
  ]),
);

const config = defineConfig([
  // Bundle ts files and copy package.json in
  {
    plugins: [
      del({ targets: 'dist/**' }),
      typescript({
        exclude: ['**/*.stories.ts'],
        declaration: false,
      }),
      copy({
        targets: [{ src: 'package.json', dest: 'dist' }],
      }),
    ],
    input: componentFiles,
    output: {
      format: 'es',
      dir: 'dist',
    },
  },
  // Generate type definitions
  {
    input: componentFiles,
    output: {
      format: 'es',
      dir: 'dist',
    },
    plugins: [dts()],
  },
  // Bundle styles
  {
    plugins: [
      postcss({
        plugins: [
          // Expand glob imports like @import-glob 'components/**/*.css'; into individual imports...
          importGlob,
          // ...then inline all the @import statements
          inlineImports,
        ],
        extract: true,
      }),
      copy({
        // Copy other styles for people who want to import them directly
        targets: [
          { src: ['styles/*', '!styles/diamond-ui.css'], dest: 'dist/styles' },
          { src: 'styles/base/*', dest: 'dist/styles/base' },
          { src: 'styles/tokens/*', dest: 'dist/styles/tokens' },
        ],
      }),
    ],
    input: 'styles/diamond-ui.css',
    output: {
      format: 'es',
      file: 'dist/diamond-ui.css',
    },
  },
]);

export default config;
