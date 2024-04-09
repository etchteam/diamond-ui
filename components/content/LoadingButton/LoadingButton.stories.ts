import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingButton';

export default {
  component: 'diamond-loading-button',
  argTypes: {
    width: {
      control: {
        type: 'select',
      },
      options: ['full-width', 'full-width-mobile', 'square'],
    },
  },
};

export const Button: StoryObj = {
  render: (args) => html`
    <diamond-loading-button size="${args.size}" width="${args.width}">
      <button type="button">Loading...</button>
    </diamond-loading-button>
  `,
};
