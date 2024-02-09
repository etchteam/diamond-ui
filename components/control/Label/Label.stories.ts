import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../Input/Input';

const description = `
Diamond provides some customisable base styles applied to the \`<label>\` and \`<legend>\` elements.
`;

export default {
  component: 'label',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const Label: StoryObj = {
  render: () => html`
    <label for="input-with-label">Label</label>
    <diamond-input>
      <input id="input-with-label" />
    </diamond-input>
  `,
};

export const Legend: StoryObj = {
  render: () => html`
    <fieldset>
      <legend>Legend</legend>
      <diamond-input>
        <input />
      </diamond-input>
    </fieldset>
  `,
};

export const ScreenReaderOnly: StoryObj = {
  render: () => html`
    <p>The invisible label content below is read by screen readers</p>
    <label for="input-with-label" class="diamond-sr-only">Label</label>
  `,
};

ScreenReaderOnly.parameters = {
  docs: {
    description: {
      story:
        'Occasionally, a label is only helpful when a screen reader is in use. In this case, the `.diamond-sr-only` class can be used to visually hide the label.',
    },
  },
};
