import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Button';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';

export default {
  component: 'dmd-button',
  parameters: {
    docs: {
      description: {
        component:
          'Provides styles for default HTML button elements that can be enhanced by wrapping them in a `dmd-button` component.',
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
    <dmd-button size="${args.size}" variant="${args.variant}" width="${args.width}">
      <button type="button">Button</button>
    </dmd-wrap>
  `,
};

export const AnchorButton: StoryObj = {
  render: () => html`
    <dmd-button>
      <a href="#" onclick="return false;">Anchor</a>
    </dmd-button>
  `,
};

export const PrimaryButton: StoryObj = {
  render: () => html`
    <dmd-grid wrap="wrap">
      <dmd-grid-item>
        <dmd-button variant="primary">
          <button>Primary</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button variant="primary">
          <button disabled>Disabled</button>
        </dmd-button>
      </dmd-grid-item>
    </dmd-grid>
  `,
};

export const SecondaryButton: StoryObj = {
  render: () => html`
    <dmd-grid wrap="wrap">
      <dmd-grid-item>
        <dmd-button variant="secondary">
          <button>Secondary</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button variant="secondary">
          <button disabled>Disabled</button>
        </dmd-button>
      </dmd-grid-item>
    </dmd-grid>
  `,
};

export const TextButton: StoryObj = {
  render: () => html`
    <dmd-grid wrap="wrap">
      <dmd-grid-item>
        <dmd-button variant="text">
          <button>Text</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button variant="text">
          <button disabled>Disabled</button>
        </dmd-button>
      </dmd-grid-item>
    </dmd-grid>
  `,
};

export const Sizes: StoryObj = {
  render: () => html`
    <dmd-button size="sm">
      <button type="button">Button</button>
    </dmd-button>
    <dmd-button size="md">
      <button type="button">Button</button>
    </dmd-button>
    <dmd-button size="lg">
      <button type="button">Button</button>
    </dmd-button>
  `,
};

export const IconOnlyButton: StoryObj = {
  render: () => html`
    <dmd-grid wrap="wrap" align-items="center">
      <dmd-grid-item>
        <dmd-button width="square">
          <button type="button">
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button variant="text">
          <button type="button">
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </dmd-button>
      </dmd-grid-item>
    </dmd-grid>
  `,
};

export const CustomButton: StoryObj = {
  render: () => html`
    <style>
      .positive-button {
        --dmd-button-background: hotpink;
        --dmd-button-background-hover: pink;
        --dmd-button-background-disabled: lightgray;
        --dmd-button-border-color: hotpink;
        --dmd-button-border-color-hover: hotpink;
        --dmd-button-border-color-disabled: lightgray;
        --dmd-button-color: white;
        --dmd-button-color-hover: white;
        --dmd-button-color-disabled: white;
      }
    </style>
    <dmd-grid wrap="wrap">
      <dmd-grid-item>
        <dmd-button class="positive-button">
          <button>Custom button</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item class="positive-button">
        <dmd-button>
          <button disabled>Disabled</button>
        </dmd-button>
      </dmd-grid-item>
    </dmd-grid>
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
    <dmd-grid wrap="wrap">
      <dmd-grid-item>
        <dmd-button>
          <button>Default</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <input type="button" value="<input>" />
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <button>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                fill="currentColor"
              ></path>
            </svg>
            Icon
          </button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <button type="submit">Submit</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <button type="button">Type Button</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <button type="reset">Reset</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <button disabled>Disabled</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <input type="file" />
        </dmd-button>
      </dmd-grid-item>
      <dmd-grid-item>
        <dmd-button>
          <input type="file" disabled />
        </dmd-button>
      </dmd-grid-item>
    </dmd-grid>
  `,
};

HtmlButtonTypes.parameters = {
  docs: {
    description: {
      story: 'Diamond button styles can apply to all button-like HTML elements',
    },
  },
};
