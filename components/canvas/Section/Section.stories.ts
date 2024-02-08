import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Section';
import '../../control/Button/Button';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';

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
      <diamond-card>
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
      </diamond-card>
    </diamond-section>
  `,
};

export const MediumTheme: StoryObj = {
  render: Section.render,
};
MediumTheme.args = {
  padding: 'md',
  theme: 'medium',
};

export const DarkTheme: StoryObj = {
  render: Section.render,
};
DarkTheme.args = {
  padding: 'md',
  theme: 'dark',
};
