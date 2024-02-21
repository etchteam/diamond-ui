import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import camelCase from 'lodash/camelCase';

import { breakpoints } from '../../../lib/breakpoints';

const description = `
Diamond hidden is a set of utility classes that can be added to any component or element.

The reverse is also available as visible. Each class is applied as a min width media query,
so not every breakpoint needs to be specified.
`;

export default {
  component: 'diamond-hidden',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

const generateClasses = (args: { [key: string]: boolean }) => {
  // Loop through the breakpoint args. If true, and the previous breakpoint was false add the class.
  // If false and the previous breakpoint was true, add the reverse class.
  // Otherwise no class is added. This should give a realistic minimal application of the classes.
  return breakpoints
    .map((breakpoint, index) => {
      const arg = args[camelCase(breakpoint.name)];
      if (index === 0) {
        return arg ? `diamond-hidden-${breakpoint.name}` : '';
      }

      const previousArg = args[camelCase(breakpoints[index - 1].name)];

      if (arg && !previousArg) {
        return `diamond-hidden-${breakpoint.name}`;
      }

      if (!arg && previousArg) {
        return `diamond-visible-${breakpoint.name}`;
      }

      return '';
    })
    .filter((c) => !!c)
    .join(' ');
};

export const Hidden: StoryObj = {
  render: (args) => html`
    <div class="${generateClasses(args)}">
      Hide this content at different breakpoints.
    </div>
  `,
};

Hidden.args = {
  smallMobile: false,
  mobile: false,
  largeMobile: false,
  smallTablet: false,
  tablet: false,
  largeTablet: false,
  smallDesktop: false,
  desktop: false,
  largeDesktop: false,
};
