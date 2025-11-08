import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Link';

export default {
  component: 'dmd-link',
  parameters: {
    docs: {
      description: {
        component: 'Provides link styles for anchor or button elements.',
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['underline', 'no-underline'],
    },
  },
};

export const Link: StoryObj = {
  render: (args) => html`
    <dmd-link variant="${args.variant}">
      <a href="https://diamond.etch.co">Link text</a>
    </dmd-link>
  `,
};

Link.args = {
  variant: 'underline',
};

export const ButtonLink: StoryObj = {
  render: (args) => html`
    <dmd-link variant="${args.variant}">
      <button type="button">Link text</button>
    </dmd-link>
  `,
};

ButtonLink.args = {
  variant: 'underline',
};
