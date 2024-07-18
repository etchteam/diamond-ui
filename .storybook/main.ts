import type { StorybookConfig } from '@storybook/web-components-vite';

const base = process.env.BASE_PATH || '/';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../docs/**/*.mdx',
    '../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  async viteFinal(config) {
    return  {
      ...config,
      base,
    };
  },
};

export default config;
