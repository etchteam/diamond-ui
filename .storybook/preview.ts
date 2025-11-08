import type { Preview } from '@storybook/web-components'
import borderTokens from '../styles/tokens/border.css?raw';
import buttonTokens from '../styles/tokens/button.css?raw';
import colorTokens from '../styles/tokens/color.css?raw';
import fontTokens from '../styles/tokens/font.css?raw';
import iconTokens from '../styles/tokens/icon.css?raw';
import inputTokens from '../styles/tokens/input.css?raw';
import labelTokens from '../styles/tokens/label.css?raw';
import loadingTokens from '../styles/tokens/loading.css?raw';
import radiusTokens from '../styles/tokens/radius.css?raw';
import shadowTokesn from '../styles/tokens/shadow.css?raw';
import spacingTokens from '../styles/tokens/spacing.css?raw';
import themeTokens from '../styles/tokens/theme.css?raw';
import transitionTokens from '../styles/tokens/transition.css?raw';
import wrapTokens from '../styles/tokens/wrap.css?raw';

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
    designTokenTables: {
      collections: {
        'dmd-radius': 'radius',
        'dmd-color': 'color',
        'dmd-spacing': 'spacing',
        'dmd-button-gap': 'spacing',
        'dmd-font-line-height': 'line-height',
        'dmd-font-size': 'font-size',
        'dmd-font-weight': 'font-weight',
        'dmd-theme': 'color',
        'dmd-button-primary': 'color',
        'dmd-button-secondary': 'color',
        'dmd-button-text': 'color',
        'dmd-font-family': 'font-family',
        'dmd-input-radio-checkbox-padding': 'spacing',
        'dmd-input-padding': 'spacing',
        'dmd-shadow': 'shadow',
      },
      tokens: [
        borderTokens,
        buttonTokens,
        colorTokens,
        fontTokens,
        iconTokens,
        inputTokens,
        labelTokens,
        loadingTokens,
        radiusTokens,
        shadowTokesn,
        spacingTokens,
        themeTokens,
        transitionTokens,
        wrapTokens,
      ]
    }
  },
};

export default preview;
