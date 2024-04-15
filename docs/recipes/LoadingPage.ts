import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Generate a random number between two numbers for our delay
function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

@customElement('docs-loading-page')
export class DocsLoadingPage extends LitElement {
  @state() page: any = null;
  @state() cards: any = null;

  connectedCallback(): void {
    super.connectedCallback();

    setTimeout(
      () => {
        this.page = {
          title: 'Diamond UI',
          description: 'Bring clarity to your components.',
        };
      },
      randomBetween(1000, 3000),
    );

    setTimeout(
      () => {
        this.cards = [
          {
            title: 'Composition',
            description:
              'Invisible components that provide structure to layouts.',
            image: {
              src: 'https://placehold.it/400x300',
              width: 400,
              height: 300,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Canvas',
            description: 'Coloured boxes to pour content in to.',
            image: {
              src: 'https://placehold.it/400x300',
              width: 400,
              height: 300,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Content',
            description: 'Text, images and data for users to consume.',
            image: {
              src: 'https://placehold.it/400x300',
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
              src: 'https://placehold.it/400x300',
              width: 400,
              height: 300,
              alt: 'Placeholder',
            },
          },
        ];
      },
      randomBetween(2000, 4000),
    );
  }

  render() {
    // const { page, cards } = this;
    const page = null;
    const cards = null;
    return html`
      <link rel="stylesheet" href="../dist/diamond-ui.css" />
      <style>
        .theme-light {
          --diamond-theme-background: #fff;
        }

        .theme-medium {
          --diamond-theme-background: #f2f2f2;
        }
      </style>
      <diamond-section padding="fluid" class="theme-medium">
        <diamond-wrap
          size="md"
          gutter="md"
          class="diamond-text-align-center diamond-spacing-bottom-fluid-sm"
        >
          ${page
            ? html`<h1>${page?.title}</h1>
                <p>${page?.description}</p>`
            : html`<h1>
                  <diamond-loading-text> Loading... </diamond-loading-text>
                </h1>
                <p>
                  <diamond-loading-text>
                    Loren ipsum dolor consequit
                  </diamond-loading-text>
                </p>`}
        </diamond-wrap>
        <diamond-wrap size="xxl" gutter="md">
          <diamond-grid wrap="wrap">
            ${cards
              ? cards.map(
                  (card) => html`
                    <diamond-grid-item small-mobile="12" tablet="6" desktop="3">
                      <diamond-card border class="theme-light">
                        <diamond-img full-width responsive>
                          <img
                            src="${card.image.src}"
                            alt="${card.image.alt}"
                            width="${card.image.width}"
                            height="${card.image.height}"
                          />
                        </diamond-img>

                        <h2 class="diamond-text-size-h3">${card.title}</h2>
                        <p>${card.description}</p>

                        <diamond-button>
                          <button type="button">Read More</button>
                        </diamond-button>
                      </diamond-card>
                    </diamond-grid-item>
                  `,
                )
              : [1, 2, 3, 4].map(
                  () => html`
                    <diamond-grid-item small-mobile="12" tablet="6" desktop="3">
                      <diamond-card border class="theme-light">
                        <diamond-img full-width responsive>
                          <diamond-loading-img
                            width="400"
                            height="300"
                          ></diamond-loading-img>
                        </diamond-img>
                        <h2 class="diamond-text-size-h3">
                          <diamond-loading-text>
                            Loren ipsum dolor consequit
                          </diamond-loading-text>
                        </h2>
                        <p>
                          <diamond-loading-text>
                            Loren ipsum dolor consequit
                          </diamond-loading-text>
                        </p>
                        <diamond-button>
                          <diamond-loading-button>
                            Loading...
                          </diamond-loading-button>
                        </diamond-button>
                      </diamond-card>
                    </diamond-grid-item>
                  `,
                )}
          </diamond-grid>
        </diamond-wrap>
      </diamond-section>
    `;
  }
}
