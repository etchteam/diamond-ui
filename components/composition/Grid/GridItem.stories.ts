import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Grid';
import './GridItem';

const col = {
  control: { type: 'select' },
  options: ['auto', ...[...Array(12).keys()].map((i) => `${i + 1}`)],
};

export default {
  component: 'diamond-grid-item',
  argTypes: {
    smallMobile: col,
    mobile: col,
    largeMobile: col,
    smallTablet: col,
    tablet: col,
    largeTablet: col,
    smallDesktop: col,
    desktop: col,
    largeDesktop: col,
  },
};

export const GridItem: StoryObj = {
  render: ({
    grow,
    shrink,
    smallMobile,
    mobile,
    largeMobile,
    smallTablet,
    tablet,
    largeTablet,
    smallDesktop,
    desktop,
    largeDesktop,
  }) => html`
    <diamond-grid wrap="wrap">
      ${[...Array(24).keys()].map(
        (i) => html`
          <diamond-grid-item
            ?grow=${grow}
            ?shrink=${shrink}
            small-mobile="${smallMobile}"
            mobile="${mobile}"
            large-mobile="${largeMobile}"
            small-tablet="${smallTablet}"
            tablet="${tablet}"
            large-tablet="${largeTablet}"
            small-desktop="${smallDesktop}"
            desktop="${desktop}"
            large-desktop="${largeDesktop}"
          >
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

GridItem.args = {
  grow: false,
  shrink: false,
  smallMobile: '12',
  mobile: '12',
  largeMobile: '6',
  smallTablet: '6',
  tablet: '4',
  largeTablet: '3',
  smallDesktop: '2',
  desktop: '1',
  largeDesktop: '1',
};
