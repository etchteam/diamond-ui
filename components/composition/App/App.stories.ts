import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './App';

export default {
  component: 'dmd-app',
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
        type: 'radio',
      },
      options: ['', 'sticky'],
    },
  },
};

export const App: StoryObj = {
  render: (args) => html`
    <dmd-app header="${args.header}">
      <dmd-section padding="lg" class="dmd-theme-medium" slot="header">
        <dmd-wrap gutter="md">
          <header>Header</header>
        </dmd-wrap>
      </dmd-section>
      <dmd-section padding="xl" class="dmd-theme-light">
        <dmd-wrap gutter="md">
          <main>Main</main>
        </dmd-wrap>
      </dmd-section>
      <dmd-section padding="lg" class="dmd-theme-dark" slot="footer">
        <dmd-wrap gutter="md">
          <footer>Footer</footer>
        </dmd-wrap>
      </dmd-section>
    </dmd-app>
  `,
};
