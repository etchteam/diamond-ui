import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingText';

export default {
  component: 'dmd-loading-text',
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
      <dmd-loading-text>Loading title</dmd-loading-text>
    </h1>
    <p>
      <dmd-loading-text>Loading text</dmd-loading-text>
    </p>
  `,
};
