import type { StorybookConfig } from '@storybook/web-components-vite';
import path from 'node:path';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../docs/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {
      builder: {
        viteConfigPath: path.resolve('./.storybook/vite.config.ts')
      }
    }
  },
  docs: {
    autodocs: true
  }
};

export default config;
