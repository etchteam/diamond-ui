import type { Preview } from '@storybook/web-components'

import '../styles/diamond-ui.css';
import '../styles/themes.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Docs',
          'Composition',
          'Canvas',
          'Content',
          'Controls',
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
