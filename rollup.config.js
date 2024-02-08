import path from 'node:path';
import { fileURLToPath } from 'node:url';

import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import inlineImports from 'postcss-import';
import importGlob from 'postcss-import-ext-glob';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';

const config = defineConfig([
  {
    plugins: [
      del({ targets: 'dist/**' }),
      typescript(),
      copy({
        targets: [{ src: 'package.json', dest: 'dist' }],
      }),
    ],
    input: Object.fromEntries(
      glob.sync('components/**/*.ts').map((file) => [
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
    ),
    output: {
      format: 'es',
      dir: 'dist',
    },
  },
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
