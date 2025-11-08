import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
import './Card';

export default {
  component: 'dmd-card',
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
  parameters: {
    docs: {
      description: {
        component:
          'The card component is a simple wrapper with a single slot and optional props for styling the card itself.',
      },
    },
  },
};

export const Card: StoryObj = {
  render: ({ border, shadow, muted, radius, padding, theme }) => html`
    <dmd-card
      ?border="${border}"
      ?shadow="${shadow}"
      ?muted="${muted}"
      ?radius="${radius}"
      padding="${padding}"
      class="dmd-theme-${theme}"
    >
      <docs-placeholder>
        <h3>Placeholder content</h3>
        <p>
          The slot can contain anything, the card component acts as a simple
          wrapper with optional props for styling the card itself.
        </p>
      </docs-placeholder>
    </dmd-card>
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
    <dmd-grid wrap="wrap">
      <dmd-grid-item mobile="12" tablet="6">
        <a href="https://etch.co">
          <dmd-card border>
            <h3>Card title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </dmd-card>
        </a>
      </dmd-grid-item>
      <dmd-grid-item mobile="12" tablet="6">
        <button type="button">
          <dmd-card border>
            <h3>Card title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </dmd-card>
        </button>
      </dmd-grid-item>
    </dmd-grid>
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
    <dmd-wrap size="sm">
      <dmd-card border radius shadow class="dmd-theme-light">
        <dmd-img block responsive class="dmd-spacing-bottom-md">
          <img
            src="https://placehold.co/400x300"
            alt="Placeholder"
            width="400"
            height="300"
          />
        </dmd-img>
        <h3>Card title</h3>
        <p class="dmd-spacing-bottom-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <dmd-button variant="primary" size="sm" width="full-width">
          <button type="button">Button</button>
        </dmd-button>
      </dmd-card>
    </dmd-wrap>
  `,
};

ImageCard.parameters = {
  docs: {
    description: {
      story: `As a flexible canvas element, the card can be used for any number of layouts. For example, a simple image card.`,
    },
  },
};
