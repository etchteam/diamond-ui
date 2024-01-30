import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Card';

export default {
  component: 'diamond-card',
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: ['light', 'medium', 'dark'],
    },
    padding: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
    },
  },
};

export const Card: StoryObj = {
  render: ({ border, shadow, muted, radius, padding, theme }) => html`
    <diamond-card
      ?border="${border}"
      ?shadow="${shadow}"
      ?muted="${muted}"
      ?radius="${radius}"
      padding="${padding}"
      class="diamond-theme-${theme}"
    >
      <h3>Card title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </diamond-card>
  `,
};

Card.args = {
  border: true,
  shadow: false,
  muted: false,
  radius: false,
  padding: 'md',
  theme: 'light',
};
