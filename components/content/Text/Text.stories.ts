import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const description =
  'A set of utility classes that can be added to any component or element to alter the text style.';

export default {
  component: 'dmd-text',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    font: {
      control: {
        type: 'select',
      },
      options: ['body', 'heading'],
      description:
        'Sets a combination of CSS properties to match the selected font style.',
    },
    size: {
      control: {
        type: 'select',
      },
      options: [
        'base',
        'default',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
        'xxxl',
        'h1',
        'h2',
        'h3',
        'h4',
      ],
      description: 'Sets the font-size property.',
    },
    weight: {
      control: {
        type: 'select',
      },
      options: ['light', 'medium', 'bold', 'black', 'body', 'heading'],
      description: 'Sets the font-weight property.',
    },
    align: {
      control: {
        type: 'inline-radio',
      },
      options: ['left', 'center', 'right'],
      description: 'Sets the text-align property.',
    },
    wrap: {
      control: {
        type: 'inline-radio',
      },
      options: ['balance', 'pretty'],
      description: 'Sets the text-wrap property.',
    },
    truncate: {
      control: {
        type: 'boolean',
      },
      description:
        "Truncates the text to a single line with an ellipsis if it's too long.",
    },
    lineLimit: {
      control: {
        type: 'select',
      },
      options: ['1', '2', '3', '4'],
      description:
        "Limits the text to the specified number of lines and adds an ellipsis if it's too long. 'dmd-text-line-limit-1' is an alias for 'dmd-text-truncate'.",
    },
    decoration: {
      control: {
        type: 'inline-radio',
      },
      options: ['none'],
      description:
        'Sets the text-decoration property. Currently only supports the value "none", which can be used to remove the default text underline on cards wrapped in <a> tags.',
    },
  },
};

export const Text: StoryObj = {
  render: ({
    font,
    size,
    weight,
    align,
    wrap,
    lineLimit,
    truncate,
    decoration,
  }) => {
    const classes = [
      `dmd-text-font-${font}`,
      `dmd-text-size-${size}`,
      `dmd-text-weight-${weight}`,
      `dmd-text-align-${align}`,
      `dmd-text-wrap-${wrap}`,
      `dmd-text-line-limit-${lineLimit}`,
      `dmd-text-decoration-${decoration}`,
    ];

    if (truncate) {
      classes.push('dmd-text-truncate');
    }

    const classString = classes
      .filter((className) => !className.endsWith('undefined'))
      .join(' ');

    return html`
      <p class="${classString}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    `;
  },
};

Text.args = {
  font: undefined,
  size: undefined,
  weight: undefined,
  align: undefined,
  wrap: undefined,
  truncate: false,
  lineLimit: undefined,
  decoration: undefined,
};
