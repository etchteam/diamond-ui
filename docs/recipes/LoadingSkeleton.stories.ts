import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingPage';

export default {
  title: 'Recipes/Loading Skeleton',
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoadingSkeleton: StoryObj = {
  render: () => html`<docs-loading-page></docs-loading-page>`,
};
