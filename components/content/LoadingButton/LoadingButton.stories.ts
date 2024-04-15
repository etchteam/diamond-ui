import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingButton';

export default {
  component: 'diamond-loading-button',
};

export const Button: StoryObj = {
  render: () => html`
    <diamond-button width="full-width">
      <diamond-loading-button>Button </diamond-loading-button>
    </diamond-button>
  `,
};
