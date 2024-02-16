import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './RadioCheckbox';

export default {
  component: 'diamond-radio-checkbox',
  parameters: {
    docs: {
      description: {
        component:
          'Wraps an HTML input type radio or checkbox element to provide consistent styling and behavior.',
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

export const Radio: StoryObj = {
  render: (args) => html`
    <diamond-radio-checkbox
      state="${args.state}"
      class="diamond-spacing-bottom-sm"
    >
      <label>
        <input type="radio" name="my-radio" value="yes" />
        Item label one
      </label>
    </diamond-radio-checkbox>
    <diamond-radio-checkbox
      state="${args.state}"
      class="diamond-spacing-bottom-sm"
    >
      <label>
        <input type="radio" name="my-radio" value="no" />
        Item label two
      </label>
    </diamond-radio-checkbox>
    <diamond-radio-checkbox state="${args.state}">
      <label>
        <input type="radio" name="my-radio" value="no" disabled />
        Item label two
      </label>
    </diamond-radio-checkbox>
  `,
};

export const Checkbox: StoryObj = {
  render: (args) => html`
    <diamond-radio-checkbox
      state="${args.state}"
      class="diamond-spacing-bottom-sm"
    >
      <label>
        <input type="checkbox" name="my-checkbox" value="yes" />
        Item label one
      </label>
    </diamond-radio-checkbox>
    <diamond-radio-checkbox
      state="${args.state}"
      class="diamond-spacing-bottom-sm"
    >
      <label>
        <input type="checkbox" name="my-checkbox" value="no" />
        Item label two
      </label>
    </diamond-radio-checkbox>
    <diamond-radio-checkbox state="${args.state}">
      <label>
        <input type="checkbox" name="my-checkbox" value="no" disabled />
        Item label two
      </label>
    </diamond-radio-checkbox>
  `,
};

export const CustomIcon: StoryObj = {
  render: (args) => html`
    <diamond-radio-checkbox
      state="${args.state}"
      input="${args.input}"
      class="diamond-spacing-bottom-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        slot="icon"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label>
        <input type="checkbox" name="custom-icon" value="yes" />
        Item label one
      </label>
    </diamond-radio-checkbox>
    <diamond-radio-checkbox state="${args.state}" input="${args.input}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        slot="icon"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label>
        <input type="checkbox" name="custom-icon" value="no" />
        Item label two
      </label>
    </diamond-radio-checkbox>
  `,
};
