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
      <diamond-help-text>Help text</diamond-help-text>
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
            stroke="none"
            fill="currentColor"
            width="24"
            height="24"
            aria-label="A random icon for example placement"
          >
            >
            <path
              d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
        </diamond-grid-item>
      </diamond-grid>
      <diamond-input>
        <input id="composing-elements" type="text" />
      </diamond-input>
      <diamond-help-text>Help text</diamond-help-text>
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

export const FormGroupValidationError: StoryObj = {
  render: (args) => html`
    <diamond-form-group orientation="${args.orientation}">
      <label for="name">Form group label</label>
      <diamond-help-text state="error">Error message</diamond-help-text>
      <diamond-input state="invalid">
        <input id="name" type="text" />
      </diamond-input>
      <diamond-help-text>Help text</diamond-help-text>
    </diamond-form-group>
  `,
};
