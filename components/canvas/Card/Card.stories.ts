import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
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

export const Interactive: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item mobile="12" tablet="6">
        <a href="https://etch.co">
          <diamond-card border>
            <h3>Card title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </diamond-card>
        </a>
      </diamond-grid-item>
      <diamond-grid-item mobile="12" tablet="6">
        <button type="button">
          <diamond-card border>
            <h3>Card title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </diamond-card>
        </button>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

Interactive.parameters = {
  docs: {
    description: {
      story: 'The is attribute requires a polyfill in Safari',
    },
  },
};
