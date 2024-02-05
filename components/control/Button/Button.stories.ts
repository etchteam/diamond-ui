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
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

export const Button: StoryObj = {
  render: (args) => html`
    <diamond-button size="${args.size}" gutter="${args.gutter}">
      <button>Button</button>
    </diamond-wrap>
  `,
};

Button.args = {
  size: 'md',
  variant: 'primary',
};

export const AnchorButton: StoryObj = {
  render: () => html`
    <diamond-button>
      <a href="#" onclick="return false;">Anchor</a>
    </diamond-button>
  `,
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
