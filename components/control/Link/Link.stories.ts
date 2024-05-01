import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Link';

export default {
  component: 'diamond-link',
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
    <diamond-link variant="${args.variant}">
      <a href="https://diamond.etch.co">Link text</a>
    </diamond-link>
  `,
};

Link.args = {
  variant: 'underline',
};

export const ButtonLink: StoryObj = {
  render: (args) => html`
    <diamond-link variant="${args.variant}">
      <button type="button">Link text</button>
    </diamond-link>
  `,
};

ButtonLink.args = {
  variant: 'underline',
};
