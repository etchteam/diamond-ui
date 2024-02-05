import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Button';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';

export default {
  component: 'diamond-button',
  parameters: {
    docs: {
      description: {
        component:
          'Provides styles for default HTML button elements that can be enhanced by wrapping them in a `diamond-button` component.',
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'text'],
    },
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
    <diamond-button size="${args.size}" variant="${args.variant}" width="${args.width}">
      <button type="button">Button</button>
    </diamond-wrap>
  `,
};

export const AnchorButton: StoryObj = {
  render: () => html`
    <diamond-button>
      <a href="#" onclick="return false;">Anchor</a>
    </diamond-button>
  `,
};

export const PrimaryButton: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-button variant="primary">
          <button>Primary</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button variant="primary">
          <button disabled>Disabled</button>
        </diamond-button>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

export const SecondaryButton: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-button variant="secondary">
          <button>Secondary</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button variant="secondary">
          <button disabled>Disabled</button>
        </diamond-button>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

export const TextButton: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-button variant="text">
          <button>Text</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button variant="text">
          <button disabled>Disabled</button>
        </diamond-button>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

export const IconOnlyButton: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-button width="square">
          <button type="button">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
              aria-label="Send mail"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button variant="text">
          <button type="button">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
              aria-label="Send mail"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </diamond-button>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

export const CustomButton: StoryObj = {
  render: () => html`
    <style>
      .positive-button {
        --diamond-button-background: hotpink;
        --diamond-button-background-hover: pink;
        --diamond-button-background-disabled: lightgray;
        --diamond-button-border-color: hotpink;
        --diamond-button-border-color-hover: hotpink;
        --diamond-button-border-color-disabled: lightgray;
        --diamond-button-color: white;
        --diamond-button-color-hover: white;
        --diamond-button-color-disabled: white;
      }
    </style>
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-button class="positive-button">
          <button>Custom button</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item class="positive-button">
        <diamond-button>
          <button disabled>Disabled</button>
        </diamond-button>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

CustomButton.parameters = {
  docs: {
    description: {
      story:
        'Customise buttons by altering the CSS variables, if more variations than the ones provided then extra classes can be used.',
    },
  },
};

export const HtmlButton: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <button>Default</button>
      </diamond-grid-item>
      <diamond-grid-item>
        <input type="button" value="<input>" />
      </diamond-grid-item>
      <diamond-grid-item>
        <button>
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Icon
        </button>
      </diamond-grid-item>
      <diamond-grid-item>
        <button type="submit">Submit</button>
      </diamond-grid-item>
      <diamond-grid-item>
        <button type="button">Type Button</button>
      </diamond-grid-item>
      <diamond-grid-item>
        <button type="reset">Reset</button>
      </diamond-grid-item>
      <diamond-grid-item>
        <button disabled>Disabled</button>
      </diamond-grid-item>
      <diamond-grid-item>
        <input type="file" />
      </diamond-grid-item>
    </diamond-grid>
  `,
};

HtmlButton.parameters = {
  docs: {
    description: {
      story:
        'Default Diamond button styles apply to all button-like HTML elements',
    },
  },
};
