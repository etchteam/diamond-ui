import type { Preview } from '@storybook/web-components'

// Vite builder doesn't like the glob import in diamond-ui.css
// importing the individual css files here instead.
import 'modern-normalize/modern-normalize.css';
import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/themes.css';
import '../styles/docs/docs.css';
import './styles.css'; // Storybook style overrides

import '../docs/components/Cell';
import '../docs/components/Spacing';
import '../docs/components/TokenTable';

// @ts-ignore-next-line
import.meta.glob('../components/**/*.css', { eager: true });

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Docs',
          ['Get Started', 'Theming', 'Why no Sass?', 'Support'],
          'Showroom',
          'Foundations',
          'Content',
          'Control',
          'Canvas',
          'Composition',
          'Recipes',
        ],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        smallMobile: {
          name: 'Small mobile',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        mobile: {
          name: 'Average mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        largeMobile: {
          name: 'Large mobile',
          styles: {
            width: '480px',
            height: '896px',
          },
        },
        smallTablet: {
          name: 'Small tablet',
          styles: {
            width: '600px',
            height: '960px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        largeTablet: {
          name: 'Large tablet',
          styles: {
            width: '1024px',
            height: '1366px',
          },
        },
        smallDesktop: {
          name: 'Small desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
        largeDesktop: {
          name: 'Large desktop',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
      }
    },
  },
};

export default preview;
