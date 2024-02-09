import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../control/Input/Input';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
import './FormGroup';

export default {
  component: 'diamond-form-group',
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
  },
};

export const FormGroup: StoryObj = {
  render: (args) => html`
    <diamond-form-group orientation="${args.orientation}">
      <label for="name">Form group label</label>
      <diamond-input>
        <input id="name" type="text" />
      </diamond-input>
      <p>Help text</p>
    </diamond-form-group>
  `,
};

export const ComposingElements: StoryObj = {
  render: () => html`
    <diamond-form-group orientation="horizontal">
      <diamond-grid align-items="center">
        <diamond-grid-item grow="grow">
          <label for="composing-elements">Form group label</label>
        </diamond-grid-item>
        <diamond-grid-item>
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            width="24"
            height="24"
            aria-label="A random icon for example placement"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </diamond-grid-item>
      </diamond-grid>
      <diamond-input>
        <input id="composing-elements" type="text" />
      </diamond-input>
      <p>Help text</p>
    </diamond-form-group>
  `,
};

ComposingElements.parameters = {
  docs: {
    description: {
      story:
        'The form group expects the first child element to be label-like, but its not opinionated about what elements are used.',
    },
  },
};
