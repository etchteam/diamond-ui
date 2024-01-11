import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './card';

export default {
  component: 'diamond-card',
};

export const _Default: StoryObj = {
  render: (args) => html`
    <diamond-card href="${args.href}">
      <h3>Card title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </diamond-card>
  `,
};

_Default.args = {
  href: '#',
};

_Default.storyName = 'Card';
