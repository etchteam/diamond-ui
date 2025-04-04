import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Enter';

export default {
  component: 'diamond-enter',
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['fade', 'fade-in-up', 'boing'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The enter component can be wrapped around content to animate it into view.',
      },
    },
  },
};

export const Enter: StoryObj = {
  render: (args) => html`
    <diamond-enter
      type="${args.type}"
      enter-on-scroll="${args.enterOnScroll}"
      delay="${args.delay}"
    >
      <div style="background-color: #eee; height: 400px;"></div>
    </diamond-enter>
  `,
};

Enter.args = {
  type: 'fade',
  enterOnScroll: false,
  delay: '0.5',
};

export const OnScroll: StoryObj = {
  render: (args) => html`
    <div style="height: 120vh;">Scroll down</div>
    <diamond-enter
      type="${args.type}"
      enter-on-scroll="${args.enterOnScroll}"
      delay="${args.delay}"
    >
      <div style="background-color: #eee; height: 400px;"></div>
    </diamond-enter>
  `,
};

OnScroll.args = {
  type: 'boing',
  enterOnScroll: true,
  delay: '0',
};
