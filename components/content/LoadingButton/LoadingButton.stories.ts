import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingButton';

export default {
  component: 'diamond-loading-button',
};

export const LoadingButton: StoryObj = {
  render: () => html`
    <diamond-button width="full-width">
      <diamond-loading-button>Button text</diamond-loading-button>
    </diamond-button>
  `,
};
