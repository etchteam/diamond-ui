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
        --dmd-theme-background: #fff;
        --dmd-theme-color: #333;
        --dmd-theme-heading-color: #333;
      }

      .theme-medium {
        --dmd-theme-background: #f2f2f2;
        --dmd-theme-color: #333;
        --dmd-theme-heading-color: #333;
      }

      .theme-dark {
        --dmd-theme-background: #333;
        --dmd-theme-color: #fff;
        --dmd-theme-heading-color: #fff;
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
    <dmd-section padding="fluid" class="theme-dark">
      <dmd-
        size="md"
        gutter="md"
        class="dmd-text-align-center dmd-spacing-bottom-fluid"
      >
        <div class="js-page-loaded" hidden>
          <dmd-r type="fade">
            <h1>Diamond UI</h1>
            <p>Bring clarity to your components.</p>
          </dmd-enter>
        </div>
        <div class="js-page-loading">
          <h1>
            <dmd-ing-text> Fake loading title </dmd-loading-text>
          </h1>
          <p>
            <dmd-ing-text>
              Lorem ipsum dolor consequit sit amet epsilon
            </dmd-loading-text>
          </p>
        </div>
      </dmd-wrap>
      <dmd- size="xxl" gutter="md">
        <div class="js-cards-loading">
          <dmd- wrap="wrap">
            ${[1, 2, 3, 4].map(
              (i) => html`
                <dmd--item
                  small-mobile="12"
                  tablet="6"
                  large-tablet="3"
                  fill
                >
                  <dmd-r type="fade-in-up" delay="${i * 0.1}">
                    <dmd- radius class="theme-light">
                      <dmd-
                        radius
                        full-width
                        responsive
                        block
                        class="dmd-spacing-bottom-md"
                      >
                        <dmd-ing-img
                          width="400"
                          height="300"
                        ></dmd-loading-img>
                      </dmd-img>
                      <h2 class="dmd-text-size-h3">
                        <dmd-ing-text>
                          Card title
                        </dmd-loading-text>
                      </h2>
                      <p class="dmd-spacing-bottom-lg">
                        <dmd-ing-text>
                          Lorem ipsum dolor consequit sit amet epsilon evitcus
                          smartrum.
                        </dmd-loading-text>
                      </p>
                      <dmd-on width="full-width">
                        <dmd-ing-button>
                          Button text
                        </dmd-loading-button>
                      </dmd-button>
                    </dmd-card>
                  </dmd-enter>
                </dmd-grid-item>
              `,
            )}
          </dmd-grid>
        </div>

        <div class="js-cards-loaded" hidden>
          <dmd- wrap="wrap">
            ${cards.map(
              (card) => html`
                <dmd--item
                  small-mobile="12"
                  tablet="6"
                  large-tablet="3"
                  fill
                >
                  <dmd- class="theme-light" radius>
                    <dmd-r type="fade">
                      <dmd-
                        radius
                        full-width
                        responsive
                        block
                        class="dmd-spacing-bottom-md"
                      >
                        <img
                          src="${card.image.src}"
                          alt="${card.image.alt}"
                          width="${card.image.width}"
                          height="${card.image.height}"
                        />
                      </dmd-img>

                      <h2 class="dmd-text-size-h3">${card.title}</h2>
                      <p class="dmd-spacing-bottom-lg">
                        ${card.description}
                      </p>

                      <dmd-on width="full-width">
                        <button type="button">Read More</button>
                      </dmd-button>
                    </dmd-enter>
                  </dmd-card>
                </dmd-grid-item>
              `,
            )}
          </dmd-grid>
        </div>
      </dmd-wrap>
    </dmd-section>
  `,
};
