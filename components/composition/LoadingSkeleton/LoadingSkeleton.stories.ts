import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingSkeleton';

export default {
  component: 'diamond-loading-skeleton',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '.',
      },
    },
  },
  argTypes: {
    loading: {
      control: {
        type: 'select',
      },
      options: ['true', 'false'],
    },
  },
};

export const Loading: StoryObj = {
  render: (args) => html`
    <diamond-wrap size="md" gutter="md">
      <diamond-loading-skeleton loading="${args.loading}">
        <diamond-card border="" padding="md" class="diamond-theme-light">
          <h3>Card title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </diamond-card>
      </diamond-loading-skeleton>
    </diamond-wrap>
  `,
};
