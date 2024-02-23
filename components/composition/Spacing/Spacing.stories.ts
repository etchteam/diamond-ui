import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const description = `
Diamond spacing is a set of utility classes that can be added to any component or element.

Spacing tweaks are one of the most common reasons for introducing page level CSS, which is
a slippery slope to a bloated CSS file. Diamond spacing reduces or eliminates these tweaks.
`;

export default {
  component: 'diamond-spacing',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'none',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'fluid',
        'fluid-sm',
        'fluid-lg',
      ],
    },
  },
};

export const Spacing: StoryObj = {
  render: (args) => html`
    <div
      class="diamond-spacing-bottom-${args.size}"
      style="height: 100px; background-color: #eee;"
    ></div>
    <div
      class="diamond-spacing-bottom-${args.size}"
      style="height: 100px; background-color: #eee;"
    ></div>
    <div
      class="diamond-spacing-bottom-${args.size}"
      style="height: 100px; background-color: #eee;"
    ></div>
  `,
};

Spacing.args = {
  size: 'sm',
};
