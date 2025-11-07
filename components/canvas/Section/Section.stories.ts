import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Section';
import '../../control/Button/Button';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
import '../../composition/Wrap/Wrap';

const description = `
A section component represents a horizontal slice of a page.

Multiple sections and themes can be used to create visibly grouped parts
of the page with different backgrounds.

Sections support theming, applying a background colour and default
text colour based on the current theme as well as vertical spacing.
`;

export default {
  component: 'dmd-section',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: ['light', 'medium', 'dark'],
    },
    padding: {
      control: {
        type: 'select',
      },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'fluid-sm',
        'fluid',
        'fluid-lg',
        'none',
      ],
    },
  },
};

export const Section: StoryObj = {
  render: ({ padding, theme }) => html`
    <dmd-section padding="${padding}" class="dmd-theme-${theme}">
      <dmd- size="lg">
        <h3>Section title</h3>
        <p class="dmd-spacing-bottom-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <dmd->
          <dmd--item mobile="6" tablet="auto">
            <dmd-on variant="primary" width="full-width-mobile">
              <button type="button">Button text</button>
            </dmd-button>
          </dmd-grid-item>
          <dmd--item mobile="6" tablet="auto">
            <dmd-on width="full-width-mobile">
              <button type="button">Button text</button>
            </dmd-button>
          </dmd-grid-item>
        </dmd-grid>
      </dmd-wrap>
    </dmd-section>
  `,
};

Section.args = {
  padding: 'fluid',
  theme: 'light',
};

export const Theming = {
  render() {
    return html`
      ${['light', 'medium', 'dark'].map(
        (theme) => html`
          <dmd-ion padding="fluid" class="dmd-theme-${theme}">
            <dmd- size="lg">
              <h3>Section title</h3>
              <p class="dmd-spacing-bottom-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <dmd->
                <dmd--item mobile="6" tablet="auto">
                  <dmd-on variant="primary" width="full-width-mobile">
                    <button type="button">Button text</button>
                  </dmd-button>
                </dmd-grid-item>
                <dmd--item mobile="6" tablet="auto">
                  <dmd-on width="full-width-mobile">
                    <button type="button">Button text</button>
                  </dmd-button>
                </dmd-grid-item>
              </dmd-grid>
            </dmd-wrap>
          </dmd-section>
        `,
      )}
    `;
  },
};
