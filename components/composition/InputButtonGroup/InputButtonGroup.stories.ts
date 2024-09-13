import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  component: 'diamond-input-button-group',
  parameters: {
    docs: {
      description: {
        component:
          'This composition allows for an input control to be paired with a button, handling scaling and alignment of both elements.',
      },
    },
  },
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
      story: `A composition of an input and a button.`,
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

export const InputButtonGroupSearch: StoryObj = {
  render: () => html`
    <diamond-input-button-group>
        <diamond-input>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
          </svg>
          <input value="" placeholder="Search..." />
        </diamond-input>
      <diamond-button>
        <button type="button">Submit</button>
      </diamond-button>
    </diamond-input-button-group>
  `,
};
