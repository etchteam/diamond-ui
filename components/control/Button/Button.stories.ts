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
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button variant="text">
          <button type="button">
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                fill="currentColor"
              ></path>
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
        'Customise buttons by altering the CSS variables, extra classes can be used to create more variations than the primary, secondary and text ones provided.',
    },
  },
};

export const HtmlButtonTypes: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-button>
          <button>Default</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button>
          <input type="button" value="<input>" />
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button>
          <button>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                fill="currentColor"
              ></path>
            </svg>
            Icon
          </button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button>
          <button type="submit">Submit</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button>
          <button type="button">Type Button</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button>
          <button type="reset">Reset</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button>
          <button disabled>Disabled</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-button>
          <input type="file" />
        </diamond-button>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

HtmlButtonTypes.parameters = {
  docs: {
    description: {
      story: 'Diamond button styles can apply to all button-like HTML elements',
    },
  },
};
