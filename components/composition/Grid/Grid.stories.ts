import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Grid';
import './GridItem';

const description = `
The grid and grid item components are used to create a grid layout by exposing
the most commonly used flexbox properties as attributes.
`;

export default {
  component: 'dmd-grid',
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
    <dmd-grid
      wrap="${wrap}"
      direction="${direction}"
      justify-content="${justifyContent}"
      align-items="${alignItems}"
      gap="${gap}"
      ?inline=${inline}
    >
      ${[...Array(12).keys()].map(
        (i) => html`
          <dmd--item grow shrink>
            <docs-cell>${i + 1}</docs-cell>
          </dmd-grid-item>
        `,
      )}
    </dmd-grid>
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
  <dmd->
    <dmd--item grow shrink>
      <docs-cell>Grow</docs-cell>
    </dmd-grid-item>
    <dmd--item>
      <docs-cell>Fixed</docs-cell>
    </dmd-grid-item>
  </dmd-grid>
  <dmd-ing bottom="sm"></dmd-spacing>
  <dmd->
    <dmd--item>
      <docs-cell>Fixed</docs-cell>
    </dmd-grid-item>
    <dmd--item grow shrink>
      <docs-cell>Grow</docs-cell>
    </dmd-grid-item>
  </dmd-grid>
`;

export const PushApart = () => `
  <dmd- justify-content="space-between">
    <dmd--item>
      <docs-cell>Left</docs-cell>
    </dmd-grid-item>
    <dmd--item>
      <docs-cell>Right</docs-cell>
    </dmd-grid-item>
  </dmd-grid>
`;

export const Centered = () => `
  <dmd- justify-content="center">
    <dmd--item>
      <docs-cell>Centered</docs-cell>
    </dmd-grid-item>
    <dmd--item>
      <docs-cell>Centered</docs-cell>
    </dmd-grid-item>
    <dmd--item>
      <docs-cell>Centered</docs-cell>
    </dmd-grid-item>
  </dmd-grid>
`;

export const ResponsiveColumns = () => `
  <dmd- wrap="wrap">
    <dmd--item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </dmd-grid-item>
    <dmd--item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </dmd-grid-item>
    <dmd--item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </dmd-grid-item>
    <dmd--item mobile="12" tablet="6" desktop="3">
      <docs-cell>Cell</docs-cell>
    </dmd-grid-item>
  </dmd-grid>
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
  <dmd- gutter="none" size="md">
    <dmd- wrap="wrap" direction="row-reverse">
      <dmd--item mobile="12" tablet="3">
        <dmd-on variant="primary" width="full-width">
          <button type="button">Continue</button>
        </dmd-button>
      </dmd-grid-item>
      <dmd--item mobile="12" tablet="3">
        <dmd-on width="full-width">
          <button type="button">Cancel</button>
        </dmd-button>
      </dmd-grid-item>
    </dmd-grid>
  </dmd-wrap>
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
  <dmd- gutter="none" size="sm">
    <dmd- align-items="center">
      <dmd--item grow shrink>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ut justo in velit euismod ultricies id sit amet diam. Vivamus convallis
          molestie urna.
        </p>
      </dmd-grid-item>
      <dmd--item>
        <img src="https://placehold.co/200x150" alt="Placeholder image" width="200" height="150" />
      </dmd-grid-item>
    </dmd-grid>
  </dmd-wrap>
`;
