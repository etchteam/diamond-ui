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
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'fluid-sm',
        'fluid',
        'fluid-lg',
        'none',
      ],
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
      <docs-placeholder>
        <h3>Placeholder content</h3>
        <p>
          The slot can contain anything, the card component acts as a simple
          wrapper with optional props for styling the card itself.
        </p>
      </docs-placeholder>
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
      story: `The card can be made interactive by wrapping the card in an anchor or button element.
      `,
    },
  },
};

export const ImageCard: StoryObj = {
  render: () => html`
    <diamond-wrap size="sm">
      <diamond-card border radius shadow class="diamond-theme-light">
        <diamond-img block responsive class="diamond-spacing-bottom-md">
          <img
            src="https://placehold.co/400x300"
            alt="Placeholder"
            width="400"
            height="300"
          />
        </diamond-img>
        <h3>Card title</h3>
        <p class="diamond-spacing-bottom-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <diamond-button variant="primary" size="sm" width="full-width">
          <button type="button">Button</button>
        </diamond-button>
      </diamond-card>
    </diamond-wrap>
  `,
};

ImageCard.parameters = {
  docs: {
    description: {
      story: `As a flexible canvas element, the card can be used for any number of layouts. For example, a simple image card.`,
    },
  },
};
