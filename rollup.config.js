import path from 'node:path';
import { fileURLToPath } from 'node:url';

import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';

const config = defineConfig({
  plugins: [
    postcss({
      plugins: [],
    }),
    del({ targets: 'dist/*' }),
    typescript(),
    copy({
      targets: [
        { src: 'styles', dest: 'dist' },
        { src: 'package.json', dest: 'dist' },
      ],
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
});

export default config;
