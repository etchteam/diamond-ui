import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Input';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';

export default {
  component: 'diamond-input',
  parameters: {
    docs: {
      description: {
        component:
          'Wraps an HTML input element to provide consistent styling and behavior.',
      },
    },
  },
  argTypes: {
    state: {
      control: {
        type: 'select',
      },
      options: ['valid', 'invalid'],
    },
  },
};

export const Input: StoryObj = {
  render: (args) => html`
    <diamond-input state="${args.state}">
      <input />
    </diamond-input>
  `,
};

export const InputStates: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-input state="valid">
          <input value="valid" />
        </diamond-input>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-input state="invalid">
          <input value="invalid" />
        </diamond-input>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-input>
          <input value="disabled" disabled />
        </diamond-input>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

export const Affix: StoryObj = {
  render: () => html`
    <diamond-grid wrap="wrap">
      <diamond-grid-item>
        <diamond-input>
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            width="24"
            height="24"
            aria-label="Send mail"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input value="prefix" />
        </diamond-input>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-input>
          <input value="suffix" />
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            width="24"
            height="24"
            aria-label="Send mail"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </diamond-input>
      </diamond-grid-item>
    </diamond-grid>
  `,
};
