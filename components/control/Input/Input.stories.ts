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
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
              fill="currentColor"
            ></path>
          </svg>
          <input value="prefix" />
        </diamond-input>
      </diamond-grid-item>
      <diamond-grid-item>
        <diamond-input>
          <input value="suffix" />
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
              fill="currentColor"
            ></path>
          </svg>
        </diamond-input>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

export const Textarea: StoryObj = {
  render: (args) => html`
    <diamond-input state="${args.state}">
      <textarea></textarea>
    </diamond-input>
  `,
};

Textarea.parameters = {
  docs: {
    description: {
      story: 'Diamond input can be used on textarea elements as well.',
    },
  },
};

export const Select: StoryObj = {
  render: (args) => html`
    <diamond-input state="${args.state}">
      <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
          fill="currentColor"
        ></path>
      </svg>
    </diamond-input>
  `,
};

Select.parameters = {
  docs: {
    description: {
      story: 'Diamond input can be used on select elements as well.',
    },
  },
};
