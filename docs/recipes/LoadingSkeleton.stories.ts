import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../components/content/LoadingImg/LoadingImg';
import '../../components/content/LoadingText/LoadingText';
import '../../components/content/LoadingButton/LoadingButton';
import '../../components/composition/Enter/Enter';

const cards = [
  {
    title: 'Composition',
    description: 'Invisible components that provide structure to layouts.',
    image: {
      src: 'https://placehold.co/400x300',
      width: 400,
      height: 300,
      alt: 'Placeholder',
    },
  },
  {
    title: 'Canvas',
    description: 'Coloured boxes to pour content in to.',
    image: {
      src: 'https://placehold.co/400x300',
      width: 400,
      height: 300,
      alt: 'Placeholder',
    },
  },
  {
    title: 'Content',
    description: 'Text, images and data for users to consume.',
    image: {
      src: 'https://placehold.co/400x300',
      width: 400,
      height: 300,
      alt: 'Placeholder',
    },
  },
  {
    title: 'Controls',
    description:
      'Interactive elements, such as buttons, links and form inputs.',
    image: {
      src: 'https://placehold.co/400x300',
      width: 400,
      height: 300,
      alt: 'Placeholder',
    },
  },
];

export default {
  title: 'Recipes/Loading Skeleton',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'This recipes demos using the loading components to create a skeleton loading state.',
      },
    },
  },
};

export const LoadingSkeleton: StoryObj = {
  render: () => html`
    <style>
      .theme-light {
        --diamond-theme-background: #fff;
        --diamond-theme-color: #333;
        --diamond-theme-heading-color: #333;
      }

      .theme-medium {
        --diamond-theme-background: #f2f2f2;
        --diamond-theme-color: #333;
        --diamond-theme-heading-color: #333;
      }

      .theme-dark {
        --diamond-theme-background: #333;
        --diamond-theme-color: #fff;
        --diamond-theme-heading-color: #fff;
      }
    </style>
    <script>
      setTimeout(() => {
        const pageLoaded = document.querySelector('.js-page-loaded');
        const pageLoading = document.querySelector('.js-page-loading');

        pageLoaded.hidden = false;
        pageLoading.hidden = true;
      }, 1000);
      setTimeout(() => {
        const cardsLoading = document.querySelector('.js-cards-loading');
        const cardsLoaded = document.querySelector('.js-cards-loaded');

        cardsLoading.hidden = true;
        cardsLoaded.hidden = false;
      }, 3000);
    </script>
    <diamond-section padding="fluid" class="theme-dark">
      <diamond-wrap
        size="md"
        gutter="md"
        class="diamond-text-align-center diamond-spacing-bottom-fluid"
      >
        <div class="js-page-loaded" hidden>
          <diamond-enter type="fade">
            <h1>Diamond UI</h1>
            <p>Bring clarity to your components.</p>
          </diamond-enter>
        </div>
        <div class="js-page-loading">
          <h1>
            <diamond-loading-text> Fake loading title </diamond-loading-text>
          </h1>
          <p>
            <diamond-loading-text>
              Lorem ipsum dolor consequit sit amet epsilon
            </diamond-loading-text>
          </p>
        </div>
      </diamond-wrap>
      <diamond-wrap size="xxl" gutter="md">
        <div class="js-cards-loading">
          <diamond-grid wrap="wrap">
            ${[1, 2, 3, 4].map(
              (i) => html`
                <diamond-grid-item
                  small-mobile="12"
                  tablet="6"
                  large-tablet="3"
                  fill
                >
                  <diamond-enter type="fade-in-up" delay="${i * 0.1}">
                    <diamond-card radius class="theme-light">
                      <diamond-img
                        radius
                        full-width
                        responsive
                        block
                        class="diamond-spacing-bottom-md"
                      >
                        <diamond-loading-img
                          width="400"
                          height="300"
                        ></diamond-loading-img>
                      </diamond-img>
                      <h2 class="diamond-text-size-h3">
                        <diamond-loading-text>
                          Card title
                        </diamond-loading-text>
                      </h2>
                      <p class="diamond-spacing-bottom-lg">
                        <diamond-loading-text>
                          Lorem ipsum dolor consequit sit amet epsilon evitcus
                          smartrum.
                        </diamond-loading-text>
                      </p>
                      <diamond-button width="full-width">
                        <diamond-loading-button>
                          Button text
                        </diamond-loading-button>
                      </diamond-button>
                    </diamond-card>
                  </diamond-enter>
                </diamond-grid-item>
              `,
            )}
          </diamond-grid>
        </div>

        <div class="js-cards-loaded" hidden>
          <diamond-grid wrap="wrap">
            ${cards.map(
              (card) => html`
                <diamond-grid-item
                  small-mobile="12"
                  tablet="6"
                  large-tablet="3"
                  fill
                >
                  <diamond-card class="theme-light" radius>
                    <diamond-enter type="fade">
                      <diamond-img
                        radius
                        full-width
                        responsive
                        block
                        class="diamond-spacing-bottom-md"
                      >
                        <img
                          src="${card.image.src}"
                          alt="${card.image.alt}"
                          width="${card.image.width}"
                          height="${card.image.height}"
                        />
                      </diamond-img>

                      <h2 class="diamond-text-size-h3">${card.title}</h2>
                      <p class="diamond-spacing-bottom-lg">
                        ${card.description}
                      </p>

                      <diamond-button width="full-width">
                        <button type="button">Read More</button>
                      </diamond-button>
                    </diamond-enter>
                  </diamond-card>
                </diamond-grid-item>
              `,
            )}
          </diamond-grid>
        </div>
      </diamond-wrap>
    </diamond-section>
  `,
};
