import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../components/composition/Enter/Enter';
import '../../components/composition/App/App';

export const Sales: StoryObj = {
  render: () => html`
    <dmd-app header="sticky">
      <header slot="header">
        <dmd-section padding="md">
          <dmd-wrap size="xl" gutter="md">
            <img
              src="https://placehold.co/120x48"
              width="120"
              height="48"
              alt="Logo"
            />
          </dmd-wrap>
        </dmd-section>
      </header>

      <main>
        <dmd-section padding="fluid" class="dmd-theme-medium">
          <dmd-wrap size="xl" gutter="md">
            <dmd-grid>
              <dmd-grid-item small-mobile="12" tablet="8" large-tablet="6">
                <dmd-enter type="fade">
                  <span>Eyebrow text</span>
                  <h1>Big title, clever words</h1>
                </dmd-enter>
                <dmd-enter
                  type="fade-in-up"
                  delay="0.2"
                  class="dmd-spacing-bottom-lg"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi ut sapien eget nisl interdum porta vitae eu libero.
                    Curabitur laoreet iaculis orci, id hendrerit odio
                    consectetur eu.
                  </p>
                </dmd-enter>
                <dmd-enter type="fade-in-up" delay="0.4">
                  <dmd-button
                    size="lg"
                    variant="primary"
                    class="dmd-spacing-bottom-lg"
                    width="full-width-mobile"
                  >
                    <button type="button">Button text</button>
                  </dmd-button>
                </dmd-enter>

                <dmd-grid>
                  ${[0, 1, 2, 3].map(
                    (i) => html`
                      <dmd-grid-item>
                        <dmd-enter
                          type="fade-in-up"
                          delay="${i * 0.2 + 0.6}"
                        >
                          <img
                            src="https://placehold.co/64x64"
                            width="64"
                            height="64"
                            alt="Award"
                          />
                        </dmd-enter>
                      </dmd-grid-item>
                    `,
                  )}
                </dmd-grid>
              </dmd-grid-item>
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid">
          <dmd-wrap size="xl" gutter="md">
            <dmd-enter type="fade" enter-on-scroll="true">
              <dmd-wrap
                size="sm"
                gutter="none"
                class="dmd-text-align-center dmd-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </dmd-wrap>
            </dmd-enter>

            <dmd-grid
              justify-content="center"
              class="dmd-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <dmd-grid-item
                    small-mobile="12"
                    small-tablet="6"
                    large-tablet="3"
                  >
                    <dmd-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-card
                        border
                        radius
                        class="dmd-text-align-center"
                      >
                        <dmd-img block responsive>
                          <img
                            src="https://placehold.co/120x80"
                            width="240"
                            height="160"
                            alt="USP"
                            class="dmd-spacing-bottom-md"
                          />
                        </dmd-img>

                        <h3>USP title</h3>
                        <p>
                          Phasellus sodales quam fermentum enim lobortis, non
                          pellentesque est malesuada.
                        </p>
                      </dmd-card>
                    </dmd-enter>
                  </dmd-grid-item>
                `,
              )}
            </dmd-grid>

            <dmd-grid justify-content="center">
              <dmd-grid-item>
                <dmd-enter type="boing" enter-on-scroll="true" delay="0.5">
                  <dmd-button
                    width="full-width-mobile"
                    size="lg"
                    variant="primary"
                  >
                    <button type="button">Button text</button>
                  </dmd-button>
                </dmd-enter>
              </dmd-grid-item>
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid" class="dmd-theme-dark">
          <dmd-wrap size="xl" gutter="md">
            <dmd-enter type="fade" enter-on-scroll="true">
              <dmd-wrap
                size="sm"
                gutter="none"
                class="dmd-text-align-center dmd-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </dmd-wrap>
            </dmd-enter>

            <dmd-grid
              justify-content="center"
              class="dmd-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2].map(
                (i) => html`
                  <dmd-grid-item small-mobile="12" tablet="4">
                    <dmd-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-card
                        border
                        radius
                        class="dmd-text-align-center dmd-theme-light"
                      >
                        <dmd-img block responsive>
                          <img
                            src="https://placehold.co/120x80"
                            width="240"
                            height="160"
                            alt="USP"
                            class="dmd-spacing-bottom-md"
                          />
                        </dmd-img>

                        <h3>USP title</h3>
                        <p class="dmd-spacing-bottom-lg">
                          Phasellus sodales quam fermentum enim lobortis, non
                          pellentesque est malesuada.
                        </p>
                        <dmd-button
                          width="full-width"
                          class="dmd-spacing-bottom-md"
                          variant="primary"
                        >
                          <button type="button">Button text</button>
                        </dmd-button>

                        <dmd-link>
                          <a href="#">Link text</a>
                        </dmd-link>
                      </dmd-card>
                    </dmd-enter>
                  </dmd-grid-item>
                `,
              )}
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid">
          <dmd-wrap size="xl" gutter="md">
            <dmd-grid wrap="wrap" align-items="center" gap="lg">
              <dmd-grid-item small-mobile="12" tablet="6">
                <dmd-img block responsive>
                  <img
                    src="https://placehold.co/400x300"
                    width="400"
                    height="300"
                    alt="Placeholder"
                  />
                </dmd-img>
              </dmd-grid-item>
              <dmd-grid-item small-mobile="12" tablet="6">
                <dmd-enter type="fade" enter-on-scroll="true">
                  <h2>Section title</h2>

                  <dmd-list spacing="sm" class="dmd-spacing-bottom-lg">
                    <ul>
                      ${[0, 1, 2].map(
                        () => html`
                          <li>
                            Integer rutrum bibendum vulputate. Etiam nec
                            sagittis quam, eu vehicula felis. Sed vel iaculis
                            velit.
                          </li>
                        `,
                      )}
                    </ul>
                  </dmd-list>
                </dmd-enter>
                <dmd-enter type="fade-in-up" enter-on-scroll="true">
                  <dmd-button
                    size="lg"
                    variant="primary"
                    width="full-width-mobile"
                  >
                    <button type="button">Button text</button>
                  </dmd-button>
                </dmd-enter>
              </dmd-grid-item>
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid" class="dmd-theme-dark">
          <dmd-wrap size="xl" gutter="md">
            <dmd-grid justify-content="flex-end">
              <dmd-grid-item small-mobile="12" tablet="6" large-tablet="5">
                <dmd-enter type="fade-in-up" enter-on-scroll="true">
                  <dmd-card border radius class="dmd-theme-light">
                    <h2>Section title</h2>
                    <p>
                      Proin dapibus, quam nec ullamcorper suscipit, mauris ipsum
                      rhoncus magna, molestie sollicitudin massa nibh vel
                      tortor.
                    </p>
                    <p>
                      Nullam vitae ex eget turpis mattis laoreet sed id arcu.
                      Cras dapibus vestibulum dapibus.
                    </p>
                    <strong>Vestibulum dapibus &mdash; Molestie</strong>
                  </dmd-card>
                </dmd-enter>
              </dmd-grid-item>
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid">
          <dmd-wrap size="xl" gutter="md">
            <dmd-grid wrap="wrap" align-items="center">
              <dmd-grid-item small-mobile="12" tablet="4">
                <dmd-enter type="fade" enter-on-scroll="true">
                  <h2>Section title</h2>
                  <p>
                    Etiam nec sagittis quam, eu vehicula felis. Sed vel iaculis
                    velit. Suspendisse id congue orci. Integer rutrum bibendum
                    vulputate.
                  </p>
                </dmd-enter>
              </dmd-grid-item>
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <dmd-grid-item small-mobile="6" tablet="2">
                    <dmd-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-img block responsive>
                        <img
                          src="https://placehold.co/64x64"
                          width="64"
                          height="64"
                          alt="Placeholder"
                        />
                      </dmd-img>
                    </dmd-enter>
                  </dmd-grid-item>
                `,
              )}
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid" class="dmd-theme-medium">
          <dmd-wrap size="xl" gutter="md">
            <dmd-enter type="fade" enter-on-scroll="true">
              <dmd-wrap
                size="sm"
                gutter="none"
                class="dmd-text-align-center dmd-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </dmd-wrap>
            </dmd-enter>

            <dmd-grid
              justify-content="center"
              class="dmd-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <dmd-grid-item small-mobile="12" small-tablet="6">
                    <dmd-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-card border radius class="dmd-theme-light">
                        <dmd-grid justify-content="space-between">
                          <dmd-grid-item>
                            <dmd-grid gap="sm">
                              ${[0, 1, 2, 3, 4].map(
                                () => html`
                                  <dmd-grid-item>
                                    <img
                                      src="https://placehold.co/24x24"
                                      width="24"
                                      height="24"
                                      alt="Placeholder"
                                    />
                                  </dmd-grid-item>
                                `,
                              )}
                            </dmd-grid>
                          </dmd-grid-item>
                          <dmd-grid-item>
                            <img
                              src="https://placehold.co/80x24"
                              width="80"
                              height="24"
                              alt="Placeholder"
                            />
                          </dmd-grid-item>
                        </dmd-grid>
                        <hr
                          class="dmd-spacing-top-md dmd-spacing-bottom-lg"
                        />

                        <h3>Card title</h3>
                        <p class="dmd-spacing-bottom-lg">
                          Integer fermentum sed libero ac accumsan. Nullam et
                          erat id erat ornare vestibulum et ac leo. Integer eu
                          eros rhoncus, volutpat turpis nec, dignissim nisi.
                          Suspendisse vel efficitur libero, eget finibus dui.
                        </p>

                        <dmd-grid align-items="center">
                          <dmd-grid-item>
                            <img
                              src="https://placehold.co/32x32"
                              width="32"
                              height="32"
                              alt="Placeholder"
                            />
                          </dmd-grid-item>
                          <dmd-grid-item>
                            <strong> Cras dapibus </strong>
                          </dmd-grid-item>
                        </dmd-grid>
                      </dmd-card>
                    </dmd-enter>
                  </dmd-grid-item>
                `,
              )}
            </dmd-grid>

            <dmd-grid justify-content="center">
              <dmd-grid-item>
                <dmd-enter type="boing" enter-on-scroll="true" delay="0.5">
                  <dmd-button
                    width="full-width-mobile"
                    size="lg"
                    variant="primary"
                  >
                    <button type="button">Button text</button>
                  </dmd-button>
                </dmd-enter>
              </dmd-grid-item>
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid">
          <dmd-wrap size="xl" gutter="md">
            <dmd-enter type="fade" enter-on-scroll="true">
              <dmd-grid
                wrap="wrap"
                align-items="center"
                class="dmd-spacing-bottom-lg"
              >
                <dmd-grid-item grow shrink>
                  <h2 class="dmd-spacing-bottom-none">Section title</h2>
                </dmd-grid-item>
                ${[0, 1, 2].map(
                  () => html`
                    <dmd-grid-item>
                      <dmd-button width="square">
                        <button type="button">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            aria-label="Button text"
                          >
                            <path
                              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </dmd-button>
                    </dmd-grid-item>
                  `,
                )}
              </dmd-grid>
            </dmd-enter>

            <dmd-grid wrap="wrap">
              ${[0, 1, 2, 3, 4, 5].map(
                (i) => html`
                  <dmd-grid-item small-mobile="6" tablet="4">
                    <dmd-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-img block responsive>
                        <img
                          src="https://placehold.co/300x300"
                          width="300"
                          height="300"
                          alt="Placeholder"
                        />
                      </dmd-img>
                    </dmd-enter>
                  </dmd-grid-item>
                `,
              )}
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>

        <dmd-section padding="fluid">
          <dmd-wrap size="xl" gutter="md">
            <dmd-enter type="fade" enter-on-scroll="true">
              <dmd-wrap
                size="sm"
                gutter="none"
                class="dmd-text-align-center dmd-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </dmd-wrap>
            </dmd-enter>

            <dmd-grid wrap="wrap">
              <dmd-grid-item small-mobile="12" tablet="6">
                <dmd-enter type="fade-in-up" enter-on-scroll="true">
                  <dmd-img
                    block
                    responsive
                    class="dmd-spacing-bottom-md"
                  >
                    <img
                      src="https://placehold.co/320x200"
                      width="320"
                      height="200"
                      alt="Placeholder"
                    />
                  </dmd-img>
                  <span>Eyebrow text</span>
                  <h3 class="dmd-spacing-bottom-none">
                    Suspendisse nibh turpis, posuere ac ultrices non
                  </h3>
                  <p>Integer fermentum sed libero ac accumsan.</p>
                  <span class="dmd-text-size-sm"
                    >Suspendisse &mdash; Vel efficitur</span
                  >
                </dmd-enter>
              </dmd-grid-item>
              <dmd-grid-item small-mobile="12" tablet="6">
                <dmd-list variant="unstyled" spacing="md">
                  <ul>
                    ${[0, 1, 2].map(
                      (i) => html`
                        <li>
                          <dmd-enter
                            type="fade-in-up"
                            enter-on-scroll="true"
                            delay="${(i + 1) * 0.2}"
                          >
                            <dmd-grid align-items="center">
                              <dmd-grid-item>
                                <dmd-img block>
                                  <img
                                    src="https://placehold.co/160x120"
                                    width="160"
                                    height="120"
                                    alt="Placeholder"
                                  />
                                </dmd-img>
                              </dmd-grid-item>
                              <dmd-grid-item grow shrink>
                                <span>Eyebrow text</span>
                                <h3 class="dmd-spacing-bottom-none">
                                  Suspendisse nibh turpis, posuere ac ultrices
                                  non
                                </h3>
                                <span class="dmd-text-size-sm"
                                  >Suspendisse &mdash; Vel efficitur</span
                                >
                              </dmd-grid-item>
                            </dmd-grid>
                          </dmd-enter>
                        </li>
                      `,
                    )}
                  </ul>
                </dmd-list>
              </dmd-grid-item>
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>
      </main>

      <footer slot="footer">
        <dmd-section padding="fluid" class="dmd-theme-medium">
          <dmd-wrap size="xl" gutter="md">
            <dmd-grid wrap="wrap">
              ${[0, 1, 2].map(
                () => html`
                  <dmd-grid-item
                    small-mobile="12"
                    tablet="6"
                    large-tablet="3"
                  >
                    <h3>List title</h3>

                    <dmd-list variant="unstyled" spacing="sm">
                      <ul>
                        ${[0, 1, 2, 3, 4].map(
                          () => html`
                            <li>
                              <dmd-link variant="no-underline">
                                <a href="#">Link text</a>
                              </dmd-link>
                            </li>
                          `,
                        )}
                      </ul>
                    </dmd-list>
                  </dmd-grid-item>
                `,
              )}
              <dmd-grid-item small-mobile="12" tablet="6" large-tablet="3">
                <h3>Section title</h3>
                <dmd-grid class="dmd-spacing-bottom-md">
                  ${[0, 1, 2, 3].map(
                    () => html`
                      <dmd-grid-item>
                        <dmd-button width="square">
                          <button type="button">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                              aria-label="Button label"
                            >
                              <path
                                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </dmd-button>
                      </dmd-grid-item>
                    `,
                  )}
                </dmd-grid>

                <label for="select">Label text</label>
                <dmd-input>
                  <select id="select">
                    <option value="option">Option text</option>
                    <option value="option">Option text</option>
                    <option value="option">Option text</option>
                  </select>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </dmd-input>
              </dmd-grid-item>
            </dmd-grid>

            <hr class="dmd-spacing-bottom-lg dmd-spacing-top-lg" />

            <dmd-grid
              wrap="wrap"
              align-items="center"
              class="dmd-spacing-bottom-lg"
            >
              <dmd-grid-item>
                <img
                  src="https://placehold.co/120x48"
                  width="120"
                  height="48"
                  alt="Placeholder"
                />
              </dmd-grid-item>
              <dmd-grid-item grow shrink>
                Big Company Ltd. Unit 1, Big Street, Small Town, CT18 7BQ
              </dmd-grid-item>
            </dmd-grid>

            <p>© 1985 - 2024 Big Company Ltd. All rights reserved.</p>

            <dmd-grid>
              <dmd-grid-item small-mobile="12" tablet="6">
                <p>
                  Cras iaculis dui efficitur porttitor hendrerit. Mauris
                  sagittis tincidunt mi eget scelerisque. Fusce felis libero,
                  iaculis sit amet facilisis at, hendrerit ac nisl.
                </p>
                <p>
                  Suspendisse id congue orci. Integer rutrum bibendum vulputate.
                  Etiam nec sagittis quam, eu vehicula felis. Sed vel iaculis
                  velit.
                </p>
              </dmd-grid-item>
            </dmd-grid>

            <hr class="dmd-spacing-bottom-lg dmd-spacing-top-lg" />

            <dmd-grid wrap="wrap">
              ${[0, 1, 2, 3, 4].map(
                () => html`
                  <dmd-grid-item>
                    <dmd-link variant="no-underline">
                      <a href="#">Link text</a>
                    </dmd-link>
                  </dmd-grid-item>
                `,
              )}
            </dmd-grid>
          </dmd-wrap>
        </dmd-section>
      </footer>
    </dmd-app>
  `,
};
