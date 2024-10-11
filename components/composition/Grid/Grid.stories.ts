import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Grid';
import './GridItem';

const description = `
The grid and grid item components are used to create a grid layout by exposing
the most commonly used flexbox properties as attributes.
`;

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
  parameters: {
    docs: {
      description: {
        component: description,
      },
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
            <docs-cell>${i + 1}</docs-cell>
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

export const StretchOneSide = () => `
  <diamond-grid>
    <diamond-grid-item grow shrink>
      <docs-cell>Grow</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item>
      <docs-cell>Fixed</docs-cell>
    </diamond-grid-item>
  </diamond-grid>
  <diamond-spacing bottom="sm"></diamond-spacing>
  <diamond-grid>
    <diamond-grid-item>
      <docs-cell>Fixed</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item grow shrink>
      <docs-cell>Grow</docs-cell>
    </diamond-grid-item>
  </diamond-grid>
`;

export const PushApart = () => `
  <diamond-grid justify-content="space-between">
    <diamond-grid-item>
      <docs-cell>Left</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item>
      <docs-cell>Right</docs-cell>
    </diamond-grid-item>
  </diamond-grid>
`;

export const Centered = () => `
  <diamond-grid justify-content="center">
    <diamond-grid-item>
      <docs-cell>Centered</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item>
      <docs-cell>Centered</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item>
      <docs-cell>Centered</docs-cell>
    </diamond-grid-item>
  </diamond-grid>
`;

export const ResponsiveColumns = () => `
  <diamond-grid wrap="wrap">
    <diamond-grid-item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </diamond-grid-item>
    <diamond-grid-item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </diamond-grid-item>
  </diamond-grid>
`;

const responsiveColumnsDescription = `
Changes from 1-4 columns through mobile-desktop
`;

ResponsiveColumns.parameters = {
  docs: {
    description: {
      story: responsiveColumnsDescription,
    },
  },
};

export const MobileCTA = () => `
  <diamond-wrap gutter="none" size="md">
    <diamond-grid wrap="wrap" direction="row-reverse">
      <diamond-grid-item mobile="12" tablet="3">
        <diamond-button variant="primary" width="full-width">
          <button type="button">Continue</button>
        </diamond-button>
      </diamond-grid-item>
      <diamond-grid-item mobile="12" tablet="3">
        <diamond-button width="full-width">
          <button type="button">Cancel</button>
        </diamond-button>
      </diamond-grid-item>
    </diamond-grid>
  </diamond-wrap>
`;

const mobileCTADescription = `
This grid uses direction and justify to put the buttons in the right
order on mobile and desktop, with primary top on mobile and right on desktop.
`;

MobileCTA.parameters = {
  docs: {
    description: {
      story: mobileCTADescription,
    },
  },
};

export const VerticalCenterContent = () => `
  <diamond-wrap gutter="none" size="sm">
    <diamond-grid align-items="center">
      <diamond-grid-item grow shrink>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ut justo in velit euismod ultricies id sit amet diam. Vivamus convallis
          molestie urna.
        </p>
      </diamond-grid-item>
      <diamond-grid-item>
        <img src="https://placehold.co/200x150" alt="Placeholder image" width="200" height="150" />
      </diamond-grid-item>
    </diamond-grid>
  </diamond-wrap>
`;
