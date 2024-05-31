import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Section';
import '../../control/Button/Button';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
import '../../composition/Wrap/Wrap';

const description = `
A section component represents a horizontal slice of a page.

Sections support theming, applying a background colour and default
text colour based on the current theme as well as vertical spacing.

Multiple sections and themes can be used to create visibly grouped parts
of the page with different backgrounds.
`;

export default {
  component: 'diamond-section',
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
    <diamond-section padding="${padding}" class="diamond-theme-${theme}">
      <diamond-wrap size="lg">
        <h3>Section title</h3>
        <p class="diamond-spacing-bottom-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <diamond-grid>
          <diamond-grid-item mobile="6" tablet="auto">
            <diamond-button variant="primary" width="full-width-mobile">
              <button type="button">Button text</button>
            </diamond-button>
          </diamond-grid-item>
          <diamond-grid-item mobile="6" tablet="auto">
            <diamond-button width="full-width-mobile">
              <button type="button">Button text</button>
            </diamond-button>
          </diamond-grid-item>
        </diamond-grid>
      </diamond-wrap>
    </diamond-section>
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
          <diamond-section padding="fluid" class="diamond-theme-${theme}">
            <diamond-wrap size="lg">
              <h3>Section title</h3>
              <p class="diamond-spacing-bottom-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <diamond-grid>
                <diamond-grid-item mobile="6" tablet="auto">
                  <diamond-button variant="primary" width="full-width-mobile">
                    <button type="button">Button text</button>
                  </diamond-button>
                </diamond-grid-item>
                <diamond-grid-item mobile="6" tablet="auto">
                  <diamond-button width="full-width-mobile">
                    <button type="button">Button text</button>
                  </diamond-button>
                </diamond-grid-item>
              </diamond-grid>
            </diamond-wrap>
          </diamond-section>
        `,
      )}
    `;
  },
};
