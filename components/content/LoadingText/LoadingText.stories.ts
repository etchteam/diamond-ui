import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingText';

export default {
  component: 'diamond-loading-text',
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'div'],
    },
  },
};

export const Text: StoryObj = {
  render: (args) => html`
    <diamond-loading-text as="${args.as}">
      A loading skeleton
    </diamond-loading-text>
  `,
};

Text.args = {
  as: 'h1',
};
