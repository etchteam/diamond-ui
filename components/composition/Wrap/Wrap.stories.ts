import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { breakpoints } from '../../../lib/breakpoints';

import './Wrap';

export default {
  component: 'diamond-wrap',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A wrapper component that centers content and sets a max-width. It also sets inline padding to create gutters.',
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: breakpoints.map((bp) => bp.name),
    },
    gutter: {
      control: {
        type: 'select',
      },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export const Wrap: StoryObj = {
  render: (args) => html`
    <diamond-wrap size="${args.size}" gutter="${args.gutter}">
      <div
        style="height: 100px; background-color: #eee; display: flex; align-items: center; justify-content: center;"
      >
        Wrapped content
      </div>
    </diamond-wrap>
  `,
};

Wrap.args = {
  size: 'tablet',
  gutter: 'md',
};
