import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  component: 'diamond-input-button-group',
};

export const InputButtonGroup: StoryObj = {
  render: () => html`
    <diamond-input-button-group>
      <diamond-input>
        <input
          type="text"
          placeholder="Input placeholder"
          aria-label="Input label"
        />
      </diamond-input>
      <diamond-button>
        <button type="button">Button</button>
      </diamond-button>
    </diamond-input-button-group>
  `,
};

InputButtonGroup.parameters = {
  docs: {
    description: {
      story: `A composition of an input and a button, styled to look
      like a single component.`,
    },
  },
};

export const InputButtonGroupSelect: StoryObj = {
  render: () => html`
    <diamond-input-button-group>
      <diamond-input>
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
      <diamond-button>
        <button type="button">Button</button>
      </diamond-button>
    </diamond-input-button-group>
  `,
};

InputButtonGroupSelect.parameters = {
  docs: {
    description: {
      story: `The input button group can be used with
      any input type, including select elements.`,
    },
  },
};
