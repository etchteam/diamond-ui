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
  <div style="height: 600px; display:flex; justify-content:center;">
    <diamond-wrap size="md" gutter="md">
      <diamond-loading-skeleton loading="${args.loading}">
        <h2>Example page title</h3>
        <diamond-card border="" padding="md" class="diamond-theme-light">
        <h3>Card title</h3>
          <diamond-img>
            <img
              src="https://placehold.it/300x300"
              alt="Placeholder"
              width="300"
              height="300"
            />
          </diamond-img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <diamond-button>
            <a href="#" onclick="return false;">Anchor</a>
          </diamond-button>
        </diamond-card>
      </diamond-loading-skeleton>
    </diamond-wrap>
  </div>
  `,
};
