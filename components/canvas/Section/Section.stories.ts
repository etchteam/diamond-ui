import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Section';
import '../../control/Button/Button';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
import '../../composition/Wrap/Wrap';

export default {
  component: 'diamond-section',
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
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
    },
  },
};

export const Section: StoryObj = {
  render: ({ padding, theme }) => html`
    <diamond-section padding="${padding}" class="diamond-theme-${theme}">
      <diamond-wrap>
        <h3>Section title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <diamond-grid>
          <diamond-grid-item mobile="6" tablet="auto">
            <diamond-button variant="primary">
              <button type="button">Button</button>
            </diamond-button>
          </diamond-grid-item>
          <diamond-grid-item mobile="6" tablet="auto">
            <diamond-button variant="primary">
              <button type="button">Button</button>
            </diamond-button>
          </diamond-grid-item>
        </diamond-grid>
      </diamond-wrap>
    </diamond-section>
  `,
};

Section.args = {
  padding: 'md',
  theme: 'light',
};
