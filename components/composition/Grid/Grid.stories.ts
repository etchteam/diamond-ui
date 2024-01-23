import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Grid';
import './GridItem';

export default {
  component: 'diamond-grid',
  argTypes: {
    wrap: {
      control: {
        type: 'select',
      },
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
    direction: {
      control: {
        type: 'select',
      },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justifyContent: {
      control: {
        type: 'select',
      },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      control: {
        type: 'select',
      },
      options: ['flex-start', 'flex-end', 'center'],
    },
    gap: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export const Grid: StoryObj = {
  render: ({
    wrap,
    direction,
    justifyContent,
    alignItems,
    gap,
    inline,
  }) => html`
    <diamond-grid
      wrap="${wrap}"
      direction="${direction}"
      justify-content="${justifyContent}"
      align-items="${alignItems}"
      gap="${gap}"
      ?inline=${inline}
    >
      ${[...Array(12).keys()].map(
        (i) => html`
          <diamond-grid-item grow shrink>
            <div
              style="height: 100px; background-color: #eee; display: flex; align-items: center; justify-content: center;"
            >
              ${i + 1}
            </div>
          </diamond-grid-item>
        `,
      )}
    </diamond-grid>
  `,
};

Grid.args = {
  wrap: 'wrap',
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 'md',
  inline: false,
};
