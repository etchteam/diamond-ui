import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './App';

export default {
  component: 'diamond-app',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Wraps the whole site and provides slots for header, footer, and main content.',
      },
    },
  },
  argTypes: {
    header: {
      control: {
        type: 'select',
      },
      options: ['sticky', 'static'],
    },
  },
};

export const App: StoryObj = {
  render: (args) => html`
    <diamond-app header="${args.header}">
      <diamond-section padding="lg" class="diamond-theme-medium" slot="header">
        <diamond-wrap gutter="md">
          <header>Header</header>
        </diamond-wrap>
      </diamond-section>
      <diamond-section padding="xl" class="diamond-theme-light">
        <diamond-wrap gutter="md">
          <main>Main</main>
        </diamond-wrap>
      </diamond-section>
      <diamond-section padding="lg" class="diamond-theme-dark" slot="footer">
        <diamond-wrap gutter="md">
          <footer>Footer</footer>
        </diamond-wrap>
      </diamond-section>
    </diamond-app>
  `,
};

App.args = {
  header: 'static',
};
