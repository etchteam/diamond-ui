import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingText';

export default {
  component: 'diamond-loading-text',
  parameters: {
    docs: {
      description: {
        component:
          'Used as a loading placeholder before the content is available. For a full demo, see the [loading recipe](?path=/docs/recipes-loading-skeleton--docs).',
      },
    },
  },
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
