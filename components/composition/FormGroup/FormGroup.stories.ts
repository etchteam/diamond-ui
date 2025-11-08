import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../control/Input/Input';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
import './FormGroup';

export default {
  component: 'dmd-form-group',
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The form group component is a wrapper for grouping form elements with a label and optional help text.',
      },
    },
  },
};

export const FormGroup: StoryObj = {
  render: (args) => html`
    <dmd-form-group orientation="${args.orientation}">
      <label for="name">Form group label</label>
      <dmd-input>
        <input id="name" type="text" />
      </dmd-input>
      <dmd-help-text>Help text</dmd-help-text>
    </dmd-form-group>
  `,
};

export const ComposingElements: StoryObj = {
  render: () => html`
    <dmd-form-group orientation="horizontal">
      <dmd-grid align-items="center">
        <dmd-grid-item grow="grow">
          <label for="composing-elements">Form group label</label>
        </dmd-grid-item>
        <dmd-grid-item>
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
        </dmd-grid-item>
      </dmd-grid>
      <dmd-input>
        <input id="composing-elements" type="text" />
      </dmd-input>
      <dmd-help-text>Help text</dmd-help-text>
    </dmd-form-group>
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
    <dmd-form-group orientation="${args.orientation}">
      <label for="name">Form group label</label>
      <dmd-help-text state="invalid">Error message</dmd-help-text>
      <dmd-input state="invalid">
        <input id="name" type="text" />
      </dmd-input>
      <dmd-help-text>Help text</dmd-help-text>
    </dmd-form-group>
  `,
};
