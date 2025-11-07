import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingButton';

export default {
  component: 'dmd-loading-button',
  parameters: {
    docs: {
      description: {
        component:
          'Used as a loading placeholder before the content is available. For a full demo, see the [loading recipe](?path=/docs/recipes-loading-skeleton--docs).',
      },
    },
  },
};

export const LoadingButton: StoryObj = {
  render: () => html`
    <dmd-button width="full-width">
      <dmd-ing-button>Button text</dmd-loading-button>
    </dmd-button>
  `,
};
