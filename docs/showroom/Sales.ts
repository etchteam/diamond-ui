import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../components/composition/Enter/Enter';

export const Sales: StoryObj = {
  render: () => html`
    <diamond-app>
      <header>
        <diamond-section padding="md" slot="header">
          <diamond-wrap size="xl" gutter="md">
            <img
              src="https://placehold.co/120x48"
              width="120"
              height="48"
              alt="Logo"
            />
          </diamond-wrap>
        </diamond-section>
      </header>

      <main>
        <diamond-section padding="fluid" class="diamond-theme-medium">
          <diamond-wrap size="xl" gutter="md">
            <diamond-grid>
              <diamond-grid-item small-mobile="12" tablet="8" large-tablet="6">
                <diamond-enter type="fade">
                  <span>Eyebrow text</span>
                  <h1>Big title, clever words</h1>
                </diamond-enter>
                <diamond-enter
                  type="fade-in-up"
                  delay="0.2"
                  class="diamond-spacing-bottom-lg"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi ut sapien eget nisl interdum porta vitae eu libero.
                    Curabitur laoreet iaculis orci, id hendrerit odio
                    consectetur eu.
                  </p>
                </diamond-enter>
                <diamond-enter type="fade-in-up" delay="0.4">
                  <diamond-button
                    size="lg"
                    variant="primary"
                    class="diamond-spacing-bottom-lg"
                    width="full-width-mobile"
                  >
                    <button type="button">Button text</button>
                  </diamond-button>
                </diamond-enter>

                <diamond-grid>
                  ${[0, 1, 2, 3].map(
                    (i) => html`
                      <diamond-grid-item>
                        <diamond-enter
                          type="fade-in-up"
                          delay="${i * 0.2 + 0.6}"
                        >
                          <img
                            src="https://placehold.co/64x64"
                            width="64"
                            height="64"
                            alt="Award"
                          />
                        </diamond-enter>
                      </diamond-grid-item>
                    `,
                  )}
                </diamond-grid>
              </diamond-grid-item>
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid">
          <diamond-wrap size="xl" gutter="md">
            <diamond-enter type="fade" enter-on-scroll="true">
              <diamond-wrap
                size="sm"
                gutter="none"
                class="diamond-text-align-center diamond-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </diamond-wrap>
            </diamond-enter>

            <diamond-grid
              justify-content="center"
              class="diamond-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <diamond-grid-item
                    small-mobile="12"
                    small-tablet="6"
                    large-tablet="3"
                  >
                    <diamond-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <diamond-card
                        border
                        radius
                        class="diamond-text-align-center"
                      >
                        <diamond-img block responsive>
                          <img
                            src="https://placehold.co/120x80"
                            width="240"
                            height="160"
                            alt="USP"
                            class="diamond-spacing-bottom-md"
                          />
                        </diamond-img>

                        <h3>USP title</h3>
                        <p>
                          Phasellus sodales quam fermentum enim lobortis, non
                          pellentesque est malesuada.
                        </p>
                      </diamond-card>
                    </diamond-enter>
                  </diamond-grid-item>
                `,
              )}
            </diamond-grid>

            <diamond-grid justify-content="center">
              <diamond-grid-item>
                <diamond-enter type="boing" enter-on-scroll="true" delay="0.5">
                  <diamond-button
                    width="full-width-mobile"
                    size="lg"
                    variant="primary"
                  >
                    <button type="button">Button text</button>
                  </diamond-button>
                </diamond-enter>
              </diamond-grid-item>
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid" class="diamond-theme-dark">
          <diamond-wrap size="xl" gutter="md">
            <diamond-enter type="fade" enter-on-scroll="true">
              <diamond-wrap
                size="sm"
                gutter="none"
                class="diamond-text-align-center diamond-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </diamond-wrap>
            </diamond-enter>

            <diamond-grid
              justify-content="center"
              class="diamond-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2].map(
                (i) => html`
                  <diamond-grid-item small-mobile="12" tablet="4">
                    <diamond-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <diamond-card
                        border
                        radius
                        class="diamond-text-align-center diamond-theme-light"
                      >
                        <diamond-img block responsive>
                          <img
                            src="https://placehold.co/120x80"
                            width="240"
                            height="160"
                            alt="USP"
                            class="diamond-spacing-bottom-md"
                          />
                        </diamond-img>

                        <h3>USP title</h3>
                        <p class="diamond-spacing-bottom-lg">
                          Phasellus sodales quam fermentum enim lobortis, non
                          pellentesque est malesuada.
                        </p>
                        <diamond-button
                          width="full-width"
                          class="diamond-spacing-bottom-md"
                          variant="primary"
                        >
                          <button type="button">Button text</button>
                        </diamond-button>

                        <diamond-link>
                          <a href="#">Link text</a>
                        </diamond-link>
                      </diamond-card>
                    </diamond-enter>
                  </diamond-grid-item>
                `,
              )}
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid">
          <diamond-wrap size="xl" gutter="md">
            <diamond-grid wrap="wrap" align-items="center" gap="lg">
              <diamond-grid-item small-mobile="12" tablet="6">
                <diamond-img block responsive>
                  <img
                    src="https://placehold.co/400x300"
                    width="400"
                    height="300"
                    alt="Placeholder"
                  />
                </diamond-img>
              </diamond-grid-item>
              <diamond-grid-item small-mobile="12" tablet="6">
                <diamond-enter type="fade" enter-on-scroll="true">
                  <h2>Section title</h2>

                  <diamond-list spacing="sm" class="diamond-spacing-bottom-lg">
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
                  </diamond-list>
                </diamond-enter>
                <diamond-enter type="fade-in-up" enter-on-scroll="true">
                  <diamond-button
                    size="lg"
                    variant="primary"
                    width="full-width-mobile"
                  >
                    <button type="button">Button text</button>
                  </diamond-button>
                </diamond-enter>
              </diamond-grid-item>
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid" class="diamond-theme-dark">
          <diamond-wrap size="xl" gutter="md">
            <diamond-grid justify-content="flex-end">
              <diamond-grid-item small-mobile="12" tablet="6" large-tablet="5">
                <diamond-enter type="fade-in-up" enter-on-scroll="true">
                  <diamond-card border radius class="diamond-theme-light">
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
                  </diamond-card>
                </diamond-enter>
              </diamond-grid-item>
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid">
          <diamond-wrap size="xl" gutter="md">
            <diamond-grid wrap="wrap" align-items="center">
              <diamond-grid-item small-mobile="12" tablet="4">
                <diamond-enter type="fade" enter-on-scroll="true">
                  <h2>Section title</h2>
                  <p>
                    Etiam nec sagittis quam, eu vehicula felis. Sed vel iaculis
                    velit. Suspendisse id congue orci. Integer rutrum bibendum
                    vulputate.
                  </p>
                </diamond-enter>
              </diamond-grid-item>
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <diamond-grid-item small-mobile="6" tablet="2">
                    <diamond-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <diamond-img block responsive>
                        <img
                          src="https://placehold.co/64x64"
                          width="64"
                          height="64"
                          alt="Placeholder"
                        />
                      </diamond-img>
                    </diamond-enter>
                  </diamond-grid-item>
                `,
              )}
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid" class="diamond-theme-medium">
          <diamond-wrap size="xl" gutter="md">
            <diamond-enter type="fade" enter-on-scroll="true">
              <diamond-wrap
                size="sm"
                gutter="none"
                class="diamond-text-align-center diamond-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </diamond-wrap>
            </diamond-enter>

            <diamond-grid
              justify-content="center"
              class="diamond-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <diamond-grid-item small-mobile="12" small-tablet="6">
                    <diamond-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <diamond-card border radius class="diamond-theme-light">
                        <diamond-grid justify-content="space-between">
                          <diamond-grid-item>
                            <diamond-grid gap="sm">
                              ${[0, 1, 2, 3, 4].map(
                                () => html`
                                  <diamond-grid-item>
                                    <img
                                      src="https://placehold.co/24x24"
                                      width="24"
                                      height="24"
                                      alt="Placeholder"
                                    />
                                  </diamond-grid-item>
                                `,
                              )}
                            </diamond-grid>
                          </diamond-grid-item>
                          <diamond-grid-item>
                            <img
                              src="https://placehold.co/80x24"
                              width="80"
                              height="24"
                              alt="Placeholder"
                            />
                          </diamond-grid-item>
                        </diamond-grid>
                        <hr
                          class="diamond-spacing-top-md diamond-spacing-bottom-lg"
                        />

                        <h3>Card title</h3>
                        <p class="diamond-spacing-bottom-lg">
                          Integer fermentum sed libero ac accumsan. Nullam et
                          erat id erat ornare vestibulum et ac leo. Integer eu
                          eros rhoncus, volutpat turpis nec, dignissim nisi.
                          Suspendisse vel efficitur libero, eget finibus dui.
                        </p>

                        <diamond-grid align-items="center">
                          <diamond-grid-item>
                            <img
                              src="https://placehold.co/32x32"
                              width="32"
                              height="32"
                              alt="Placeholder"
                            />
                          </diamond-grid-item>
                          <diamond-grid-item>
                            <strong> Cras dapibus </strong>
                          </diamond-grid-item>
                        </diamond-grid>
                      </diamond-card>
                    </diamond-enter>
                  </diamond-grid-item>
                `,
              )}
            </diamond-grid>

            <diamond-grid justify-content="center">
              <diamond-grid-item>
                <diamond-enter type="boing" enter-on-scroll="true" delay="0.5">
                  <diamond-button
                    width="full-width-mobile"
                    size="lg"
                    variant="primary"
                  >
                    <button type="button">Button text</button>
                  </diamond-button>
                </diamond-enter>
              </diamond-grid-item>
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid">
          <diamond-wrap size="xl" gutter="md">
            <diamond-enter type="fade" enter-on-scroll="true">
              <diamond-grid
                wrap="wrap"
                align-items="center"
                class="diamond-spacing-bottom-lg"
              >
                <diamond-grid-item grow shrink>
                  <h2 class="diamond-spacing-bottom-none">Section title</h2>
                </diamond-grid-item>
                ${[0, 1, 2].map(
                  () => html`
                    <diamond-grid-item>
                      <diamond-button width="square">
                        <button type="button">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                          >
                            <path
                              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </diamond-button>
                    </diamond-grid-item>
                  `,
                )}
              </diamond-grid>
            </diamond-enter>

            <diamond-grid wrap="wrap">
              ${[0, 1, 2, 3, 4, 5].map(
                (i) => html`
                  <diamond-grid-item small-mobile="6" tablet="4">
                    <diamond-enter
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <diamond-img block responsive>
                        <img
                          src="https://placehold.co/300x300"
                          width="300"
                          height="300"
                          alt="Placeholder"
                        />
                      </diamond-img>
                    </diamond-enter>
                  </diamond-grid-item>
                `,
              )}
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>

        <diamond-section padding="fluid">
          <diamond-wrap size="xl" gutter="md">
            <diamond-enter type="fade" enter-on-scroll="true">
              <diamond-wrap
                size="sm"
                gutter="none"
                class="diamond-text-align-center diamond-spacing-bottom-lg"
              >
                <h2>Section title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut sapien eget nisl interdum porta vitae eu libero.
                </p>
              </diamond-wrap>
            </diamond-enter>

            <diamond-grid wrap="wrap">
              <diamond-grid-item small-mobile="12" tablet="6">
                <diamond-enter type="fade-in-up" enter-on-scroll="true">
                  <diamond-img
                    block
                    responsive
                    class="diamond-spacing-bottom-md"
                  >
                    <img
                      src="https://placehold.co/320x200"
                      width="320"
                      height="200"
                      alt="Placeholder"
                    />
                  </diamond-img>
                  <span>Eyebrow text</span>
                  <h3 class="diamond-spacing-bottom-none">
                    Suspendisse nibh turpis, posuere ac ultrices non
                  </h3>
                  <p>Integer fermentum sed libero ac accumsan.</p>
                  <span class="diamond-text-size-sm"
                    >Suspendisse &mdash; Vel efficitur</span
                  >
                </diamond-enter>
              </diamond-grid-item>
              <diamond-grid-item small-mobile="12" tablet="6">
                <diamond-list variant="unstyled" spacing="md">
                  <ul>
                    ${[0, 1, 2].map(
                      (i) => html`
                        <li>
                          <diamond-enter
                            type="fade-in-up"
                            enter-on-scroll="true"
                            delay="${(i + 1) * 0.2}"
                          >
                            <diamond-grid align-items="center">
                              <diamond-grid-item>
                                <diamond-img block>
                                  <img
                                    src="https://placehold.co/160x120"
                                    width="160"
                                    height="120"
                                    alt="Placeholder"
                                  />
                                </diamond-img>
                              </diamond-grid-item>
                              <diamond-grid-item grow shrink>
                                <span>Eyebrow text</span>
                                <h3 class="diamond-spacing-bottom-none">
                                  Suspendisse nibh turpis, posuere ac ultrices
                                  non
                                </h3>
                                <span class="diamond-text-size-sm"
                                  >Suspendisse &mdash; Vel efficitur</span
                                >
                              </diamond-grid-item>
                            </diamond-grid>
                          </diamond-enter>
                        </li>
                      `,
                    )}
                  </ul>
                </diamond-list>
              </diamond-grid-item>
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>
      </main>

      <footer>
        <diamond-section
          padding="fluid"
          slot="footer"
          class="diamond-theme-medium"
        >
          <diamond-wrap size="xl" gutter="md">
            <diamond-grid wrap="wrap">
              ${[0, 1, 2].map(
                () => html`
                  <diamond-grid-item
                    small-mobile="12"
                    tablet="6"
                    large-tablet="3"
                  >
                    <h3>List title</h3>

                    <diamond-list variant="unstyled" spacing="sm">
                      <ul>
                        ${[0, 1, 2, 3, 4].map(
                          () => html`
                            <li>
                              <diamond-link variant="no-underline">
                                <a href="#">Link text</a>
                              </diamond-link>
                            </li>
                          `,
                        )}
                      </ul>
                    </diamond-list>
                  </diamond-grid-item>
                `,
              )}
              <diamond-grid-item small-mobile="12" tablet="6" large-tablet="3">
                <h3>Section title</h3>
                <diamond-grid class="diamond-spacing-bottom-md">
                  ${[0, 1, 2, 3].map(
                    () => html`
                      <diamond-grid-item>
                        <diamond-button width="square">
                          <button type="button">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                            >
                              <path
                                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </diamond-button>
                      </diamond-grid-item>
                    `,
                  )}
                </diamond-grid>

                <label for="select">Label text</label>
                <diamond-input>
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
                </diamond-input>
              </diamond-grid-item>
            </diamond-grid>

            <hr class="diamond-spacing-bottom-lg diamond-spacing-top-lg" />

            <diamond-grid
              wrap="wrap"
              align-items="center"
              class="diamond-spacing-bottom-lg"
            >
              <diamond-grid-item>
                <img
                  src="https://placehold.co/120x48"
                  width="120"
                  height="48"
                  alt="Placeholder"
                />
              </diamond-grid-item>
              <diamond-grid-item grow shrink>
                Big Company Ltd. Unit 1, Big Street, Small Town, CT18 7BQ
              </diamond-grid-item>
            </diamond-grid>

            <p>© 1985 - 2024 Big Company Ltd. All rights reserved.</p>

            <diamond-grid>
              <diamond-grid-item small-mobile="12" tablet="6">
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
              </diamond-grid-item>
            </diamond-grid>

            <hr class="diamond-spacing-bottom-lg diamond-spacing-top-lg" />

            <diamond-grid wrap="wrap">
              ${[0, 1, 2, 3, 4].map(
                () => html`
                  <diamond-grid-item>
                    <diamond-link variant="no-underline">
                      <a href="#">Link text</a>
                    </diamond-link>
                  </diamond-grid-item>
                `,
              )}
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>
      </footer>
    </diamond-app>
  `,
};
