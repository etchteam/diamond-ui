import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../components/composition/Enter/Enter';
import '../../components/composition/App/App';

export const Sales: StoryObj = {
  render: () => html`
    <dmd-app header="sticky">
      <header slot="header">
        <dmd-ion padding="md">
          <dmd- size="xl" gutter="md">
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
        <dmd-ion padding="fluid" class="dmd-theme-medium">
          <dmd- size="xl" gutter="md">
            <dmd->
              <dmd--item small-mobile="12" tablet="8" large-tablet="6">
                <dmd-r type="fade">
                  <span>Eyebrow text</span>
                  <h1>Big title, clever words</h1>
                </dmd-enter>
                <dmd-r
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
                <dmd-r type="fade-in-up" delay="0.4">
                  <dmd-on
                    size="lg"
                    variant="primary"
                    class="dmd-spacing-bottom-lg"
                    width="full-width-mobile"
                  >
                    <button type="button">Button text</button>
                  </dmd-button>
                </dmd-enter>

                <dmd->
                  ${[0, 1, 2, 3].map(
                    (i) => html`
                      <dmd--item>
                        <dmd-r
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

        <dmd-ion padding="fluid">
          <dmd- size="xl" gutter="md">
            <dmd-r type="fade" enter-on-scroll="true">
              <dmd-
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

            <dmd-
              justify-content="center"
              class="dmd-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <dmd--item
                    small-mobile="12"
                    small-tablet="6"
                    large-tablet="3"
                  >
                    <dmd-r
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-
                        border
                        radius
                        class="dmd-text-align-center"
                      >
                        <dmd-block responsive>
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

            <dmd- justify-content="center">
              <dmd--item>
                <dmd-r type="boing" enter-on-scroll="true" delay="0.5">
                  <dmd-on
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

        <dmd-ion padding="fluid" class="dmd-theme-dark">
          <dmd- size="xl" gutter="md">
            <dmd-r type="fade" enter-on-scroll="true">
              <dmd-
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

            <dmd-
              justify-content="center"
              class="dmd-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2].map(
                (i) => html`
                  <dmd--item small-mobile="12" tablet="4">
                    <dmd-r
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-
                        border
                        radius
                        class="dmd-text-align-center dmd-theme-light"
                      >
                        <dmd-block responsive>
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
                        <dmd-on
                          width="full-width"
                          class="dmd-spacing-bottom-md"
                          variant="primary"
                        >
                          <button type="button">Button text</button>
                        </dmd-button>

                        <dmd->
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

        <dmd-ion padding="fluid">
          <dmd- size="xl" gutter="md">
            <dmd- wrap="wrap" align-items="center" gap="lg">
              <dmd--item small-mobile="12" tablet="6">
                <dmd-block responsive>
                  <img
                    src="https://placehold.co/400x300"
                    width="400"
                    height="300"
                    alt="Placeholder"
                  />
                </dmd-img>
              </dmd-grid-item>
              <dmd--item small-mobile="12" tablet="6">
                <dmd-r type="fade" enter-on-scroll="true">
                  <h2>Section title</h2>

                  <dmd- spacing="sm" class="dmd-spacing-bottom-lg">
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
                <dmd-r type="fade-in-up" enter-on-scroll="true">
                  <dmd-on
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

        <dmd-ion padding="fluid" class="dmd-theme-dark">
          <dmd- size="xl" gutter="md">
            <dmd- justify-content="flex-end">
              <dmd--item small-mobile="12" tablet="6" large-tablet="5">
                <dmd-r type="fade-in-up" enter-on-scroll="true">
                  <dmd- border radius class="dmd-theme-light">
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

        <dmd-ion padding="fluid">
          <dmd- size="xl" gutter="md">
            <dmd- wrap="wrap" align-items="center">
              <dmd--item small-mobile="12" tablet="4">
                <dmd-r type="fade" enter-on-scroll="true">
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
                  <dmd--item small-mobile="6" tablet="2">
                    <dmd-r
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-block responsive>
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

        <dmd-ion padding="fluid" class="dmd-theme-medium">
          <dmd- size="xl" gutter="md">
            <dmd-r type="fade" enter-on-scroll="true">
              <dmd-
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

            <dmd-
              justify-content="center"
              class="dmd-spacing-bottom-lg"
              wrap="wrap"
            >
              ${[0, 1, 2, 3].map(
                (i) => html`
                  <dmd--item small-mobile="12" small-tablet="6">
                    <dmd-r
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd- border radius class="dmd-theme-light">
                        <dmd- justify-content="space-between">
                          <dmd--item>
                            <dmd- gap="sm">
                              ${[0, 1, 2, 3, 4].map(
                                () => html`
                                  <dmd--item>
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
                          <dmd--item>
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

                        <dmd- align-items="center">
                          <dmd--item>
                            <img
                              src="https://placehold.co/32x32"
                              width="32"
                              height="32"
                              alt="Placeholder"
                            />
                          </dmd-grid-item>
                          <dmd--item>
                            <strong> Cras dapibus </strong>
                          </dmd-grid-item>
                        </dmd-grid>
                      </dmd-card>
                    </dmd-enter>
                  </dmd-grid-item>
                `,
              )}
            </dmd-grid>

            <dmd- justify-content="center">
              <dmd--item>
                <dmd-r type="boing" enter-on-scroll="true" delay="0.5">
                  <dmd-on
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

        <dmd-ion padding="fluid">
          <dmd- size="xl" gutter="md">
            <dmd-r type="fade" enter-on-scroll="true">
              <dmd-
                wrap="wrap"
                align-items="center"
                class="dmd-spacing-bottom-lg"
              >
                <dmd--item grow shrink>
                  <h2 class="dmd-spacing-bottom-none">Section title</h2>
                </dmd-grid-item>
                ${[0, 1, 2].map(
                  () => html`
                    <dmd--item>
                      <dmd-on width="square">
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

            <dmd- wrap="wrap">
              ${[0, 1, 2, 3, 4, 5].map(
                (i) => html`
                  <dmd--item small-mobile="6" tablet="4">
                    <dmd-r
                      type="fade-in-up"
                      enter-on-scroll="true"
                      delay="${i * 0.2}"
                    >
                      <dmd-block responsive>
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

        <dmd-ion padding="fluid">
          <dmd- size="xl" gutter="md">
            <dmd-r type="fade" enter-on-scroll="true">
              <dmd-
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

            <dmd- wrap="wrap">
              <dmd--item small-mobile="12" tablet="6">
                <dmd-r type="fade-in-up" enter-on-scroll="true">
                  <dmd-
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
              <dmd--item small-mobile="12" tablet="6">
                <dmd- variant="unstyled" spacing="md">
                  <ul>
                    ${[0, 1, 2].map(
                      (i) => html`
                        <li>
                          <dmd-r
                            type="fade-in-up"
                            enter-on-scroll="true"
                            delay="${(i + 1) * 0.2}"
                          >
                            <dmd- align-items="center">
                              <dmd--item>
                                <dmd-block>
                                  <img
                                    src="https://placehold.co/160x120"
                                    width="160"
                                    height="120"
                                    alt="Placeholder"
                                  />
                                </dmd-img>
                              </dmd-grid-item>
                              <dmd--item grow shrink>
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
        <dmd-ion padding="fluid" class="dmd-theme-medium">
          <dmd- size="xl" gutter="md">
            <dmd- wrap="wrap">
              ${[0, 1, 2].map(
                () => html`
                  <dmd--item
                    small-mobile="12"
                    tablet="6"
                    large-tablet="3"
                  >
                    <h3>List title</h3>

                    <dmd- variant="unstyled" spacing="sm">
                      <ul>
                        ${[0, 1, 2, 3, 4].map(
                          () => html`
                            <li>
                              <dmd- variant="no-underline">
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
              <dmd--item small-mobile="12" tablet="6" large-tablet="3">
                <h3>Section title</h3>
                <dmd- class="dmd-spacing-bottom-md">
                  ${[0, 1, 2, 3].map(
                    () => html`
                      <dmd--item>
                        <dmd-on width="square">
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
                <dmd-t>
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

            <dmd-
              wrap="wrap"
              align-items="center"
              class="dmd-spacing-bottom-lg"
            >
              <dmd--item>
                <img
                  src="https://placehold.co/120x48"
                  width="120"
                  height="48"
                  alt="Placeholder"
                />
              </dmd-grid-item>
              <dmd--item grow shrink>
                Big Company Ltd. Unit 1, Big Street, Small Town, CT18 7BQ
              </dmd-grid-item>
            </dmd-grid>

            <p>© 1985 - 2024 Big Company Ltd. All rights reserved.</p>

            <dmd->
              <dmd--item small-mobile="12" tablet="6">
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

            <dmd- wrap="wrap">
              ${[0, 1, 2, 3, 4].map(
                () => html`
                  <dmd--item>
                    <dmd- variant="no-underline">
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
