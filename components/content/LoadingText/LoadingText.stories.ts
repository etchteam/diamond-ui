import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingText';

export default {
  component: 'diamond-loading-text',
};

export const LoadingText: StoryObj = {
  render: () => html`
    <h1>
      <diamond-loading-text>Loading title</diamond-loading-text>
    </h1>
    <p>
      <diamond-loading-text>Loading text</diamond-loading-text>
    </p>
  `,
};
