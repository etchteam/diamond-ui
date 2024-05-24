import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './HelpText';
import '../Icon/Icon';

export default {
  component: 'diamond-help-text',
  parameters: {
    docs: {
      description: {
        component:
          'A piece of text to provide additional information or context for form inputs, including form validation messages.',
      },
    },
  },
  argTypes: {
    state: {
      control: {
        type: 'select',
      },
      options: ['error', 'success'],
    },
  },
};

export const HelpText: StoryObj = {
  render: ({ state }) => html`
    <diamond-help-text state="${state}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </diamond-help-text>
  `,
};

HelpText.args = {
  state: '',
};

export const HelpTextWithFormatting: StoryObj = {
  render: ({ state }) => html`
    <diamond-help-text state="${state}" class="diamond-text-size-md">
      <a href="#">Lorem ipsum</a>
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et
      <span class="diamond-text-weight-bold">dolore magna aliqua.</span>
    </diamond-help-text>
  `,
};

export const HelpTextWithIcon: StoryObj = {
  render: ({ state }) => html`
    <diamond-help-text state="${state}">
      <diamond-icon>
        <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
          <path
            d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
            fill="currentColor"
          ></path>
        </svg>
      </diamond-icon>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </diamond-help-text>
  `,
};
