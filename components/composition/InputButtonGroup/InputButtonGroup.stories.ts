import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  component: 'diamond-input-button-group',
  parameters: {
    docs: {
      description: {
        component: 'Groups an input and button together as one unit.',
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
