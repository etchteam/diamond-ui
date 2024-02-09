import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

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
};

export const App: StoryObj = {
  render: () => html`
    <diamond-app>
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
