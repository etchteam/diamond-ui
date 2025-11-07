import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../components/composition/Grid/Grid';
import '../../components/composition/Grid/GridItem';
import '../../components/canvas/Card/Card';

export default {
  title: 'Recipes/Theming',
  parameters: {
    docs: {
      description: {
        component:
          'This recipe demos using the theme classes to apply themes to components.',
      },
    },
  },
};

export const Theming: StoryObj = {
  render: () => html`
    <dmd-grid wrap="wrap">
      <dmd-grid-item small-mobile="12" tablet="4">
        <dmd-card border class="dmd-theme-light">
          <h3>Card title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </dmd-card>
      </dmd-grid-item>
      <dmd-grid-item small-mobile="12" tablet="4">
        <dmd-card border class="dmd-theme-medium">
          <h3>Card title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </dmd-card>
      </dmd-grid-item>
      <dmd-grid-item small-mobile="12" tablet="4">
        <dmd-card border class="dmd-theme-dark">
          <h3>Card title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </dmd-card>
      </dmd-grid-item>
    </dmd-grid>
  `,
};
