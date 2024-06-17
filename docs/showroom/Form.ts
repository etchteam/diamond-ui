import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../components/composition/App/App';
import '../../components/composition/Enter/Enter';
import '../../components/content/Icon/Icon';
import '../../components/control/RadioCheckbox/RadioCheckbox';

const infoIcon = html`
  <diamond-icon class="diamond-text-size-lg">
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="info"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
        fill="#0D0D0D"
      ></path>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10Z"
        fill="#0D0D0D"
      ></path>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z"
        fill="#0D0D0D"
      ></path>
    </svg>
  </diamond-icon>
`;

const chevronDownIcon = html`
  <diamond-icon>
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
  </diamond-icon>
`;

const envelopeIcon = html`
  <diamond-icon>
    <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
      <path
        d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
        fill="currentColor"
      ></path>
    </svg>
  </diamond-icon>
`;

const infoButton = html`
  <diamond-button width="square">
    <button type="button">
      <diamond-icon>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="info"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
            fill="#0D0D0D"
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10Z"
            fill="#0D0D0D"
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z"
            fill="#0D0D0D"
          ></path>
        </svg>
      </diamond-icon>
    </button>
  </diamond-button>
`;

const checkIcon = html`
  <diamond-icon>
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.6644 8.75259C17.0771 9.11951 17.1143 9.75158 16.7474 10.1644L11.4141 16.1644C11.2243 16.3779 10.9523 16.5 10.6667 16.5C10.381 16.5 10.109 16.3779 9.91926 16.1644L7.25259 13.1644C6.88567 12.7516 6.92285 12.1195 7.33564 11.7526C7.74842 11.3857 8.38049 11.4229 8.74741 11.8356L10.6667 13.9948L15.2526 8.83564C15.6195 8.42285 16.2516 8.38567 16.6644 8.75259Z"
        fill="#0D0D0D"
      ></path>
    </svg>
  </diamond-icon>
`;

export const Form: StoryObj = {
  render: () => html`
    <diamond-app header="sticky">
      <header slot="header">
        <diamond-section padding="md">
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
          <diamond-wrap size="md" gutter="md">
            <diamond-grid
              align-items="center"
              class="diamond-spacing-bottom-lg"
              wrap="wrap"
            >
              <diamond-grid-item small-mobile="12" small-tablet="auto">
                <img
                  src="https://placehold.co/120x120"
                  width="120"
                  height="120"
                  alt="Placeholder"
                />
              </diamond-grid-item>
              <diamond-grid-item small-mobile="12" small-tablet="1" grow>
                <h1 class="diamond-text-size-h2">Big title, clever words</h1>
                <p>
                  Pellentesque posuere enim ex, vel rutrum ligula semper et.
                  Donec vel nulla nibh.
                </p>
              </diamond-grid-item>
            </diamond-grid>

            <div class="diamond-theme-light">
              <diamond-card class="diamond-spacing-bottom-lg">
                <diamond-grid
                  justify-content="space-between"
                  align-items="center"
                >
                  <diamond-grid-item>
                    <h2
                      class="diamond-text-size-h3 diamond-spacing-bottom-none"
                    >
                      Card title
                    </h2>
                  </diamond-grid-item>
                  <diamond-grid-item> ${infoButton} </diamond-grid-item>
                </diamond-grid>
                <hr class="diamond-spacing-top-md diamond-spacing-bottom-md" />
                <diamond-grid>
                  <diamond-grid-item grow shrink>
                    ${checkIcon} Nulla ante eu consequat.
                  </diamond-grid-item>
                  <diamond-grid-item>
                    <diamond-link variant="no-underline">
                      <button type="button">Change</button>
                    </diamond-link>
                  </diamond-grid-item>
                </diamond-grid>
              </diamond-card>

              <diamond-card class="diamond-spacing-bottom-lg">
                <diamond-grid
                  justify-content="space-between"
                  align-items="center"
                >
                  <diamond-grid-item>
                    <h2
                      class="diamond-text-size-h3 diamond-spacing-bottom-none"
                    >
                      Card title
                    </h2>
                  </diamond-grid-item>
                  <diamond-grid-item> ${infoButton} </diamond-grid-item>
                </diamond-grid>
                <hr class="diamond-spacing-top-md diamond-spacing-bottom-md" />

                <diamond-form-group
                  orientation="horizontal"
                  class="diamond-spacing-bottom-md"
                >
                  <diamond-grid>
                    <diamond-grid-item grow="grow">
                      <label for="select">Form group label</label>
                    </diamond-grid-item>
                    <diamond-grid-item> ${infoIcon} </diamond-grid-item>
                  </diamond-grid>
                  <diamond-input>
                    <select id="select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                      <option>Option 6</option>
                    </select>
                    ${chevronDownIcon}
                  </diamond-input>
                </diamond-form-group>

                <diamond-form-group
                  orientation="horizontal"
                  class="diamond-spacing-bottom-md"
                >
                  <diamond-grid>
                    <diamond-grid-item grow="grow">
                      <label for="radio-group">Form group label</label>
                    </diamond-grid-item>
                    <diamond-grid-item> ${infoIcon} </diamond-grid-item>
                  </diamond-grid>
                  <div role="radiogroup" id="radio-group">
                    <diamond-radio-checkbox>
                      <label>
                        <input type="radio" name="my-radio" value="yes" />
                        Item label one
                      </label>
                    </diamond-radio-checkbox>
                    <diamond-radio-checkbox>
                      <label>
                        <input type="radio" name="my-radio" value="no" />
                        Item label two
                      </label>
                    </diamond-radio-checkbox>
                  </div>
                </diamond-form-group>

                <diamond-form-group
                  orientation="horizontal"
                  class="diamond-spacing-bottom-md"
                >
                  <label for="composing-elements"
                    >Form group label text that is very long so it wraps onto
                    two lines</label
                  >
                  <diamond-input>
                    ${envelopeIcon}
                    <input id="composing-elements" type="text" />
                  </diamond-input>
                  <diamond-help-text>Help text</diamond-help-text>
                </diamond-form-group>

                <diamond-form-group
                  orientation="horizontal"
                  class="diamond-spacing-bottom-md"
                >
                  <label for="checkbox-group">Form group label</label>
                  <div>
                    <diamond-radio-checkbox>
                      <label>
                        <input type="checkbox" name="my-check[]" value="yes" />
                        Item label one
                      </label>
                    </diamond-radio-checkbox>
                    <diamond-radio-checkbox>
                      <label>
                        <input type="checkbox" name="my-check[]" value="no" />
                        Item label two
                      </label>
                    </diamond-radio-checkbox>
                  </div>
                </diamond-form-group>

                <hr class="diamond-spacing-top-md diamond-spacing-bottom-md" />
                <diamond-grid justify-content="flex-end">
                  <diamond-grid-item small-mobile="12" tablet="6">
                    <diamond-button width="full-width">
                      <button type="button">Button text</button>
                    </diamond-button>
                  </diamond-grid-item>
                </diamond-grid>
              </diamond-card>

              <diamond-card class="diamond-spacing-bottom-lg">
                <diamond-grid
                  justify-content="space-between"
                  align-items="center"
                >
                  <diamond-grid-item>
                    <h2
                      class="diamond-text-size-h3 diamond-spacing-bottom-none"
                    >
                      Card title
                    </h2>
                  </diamond-grid-item>
                  <diamond-grid-item> ${infoButton} </diamond-grid-item>
                </diamond-grid>
                <hr class="diamond-spacing-top-md diamond-spacing-bottom-md" />
                <diamond-grid>
                  <diamond-grid-item small-mobile="6">
                    <diamond-button width="full-width">
                      <button type="button">Yes</button>
                    </diamond-button>
                  </diamond-grid-item>
                  <diamond-grid-item small-mobile="6">
                    <diamond-button width="full-width">
                      <button type="button">No</button>
                    </diamond-button>
                  </diamond-grid-item>
                </diamond-grid>
              </diamond-card>

              <diamond-card class="diamond-spacing-bottom-lg">
                <diamond-grid
                  justify-content="space-between"
                  align-items="center"
                >
                  <diamond-grid-item>
                    <h2
                      class="diamond-text-size-h3 diamond-spacing-bottom-none"
                    >
                      Card title
                    </h2>
                  </diamond-grid-item>
                  <diamond-grid-item> ${infoButton} </diamond-grid-item>
                </diamond-grid>

                <hr class="diamond-spacing-top-md diamond-spacing-bottom-md" />

                <diamond-grid>
                  <diamond-grid-item grow shrink>
                    <h4>Section title</h4>
                  </diamond-grid-item>
                  <diamond-grid-item>
                    <diamond-link variant="no-underline">
                      <button type="button">Remove</button>
                    </diamond-link>
                  </diamond-grid-item>
                </diamond-grid>

                <diamond-form-group
                  orientation="horizontal"
                  class="diamond-spacing-bottom-md diamond-spacing-top-md"
                >
                  <label for="select">Form group label</label>
                  <diamond-input>
                    <select id="select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                      <option>Option 6</option>
                    </select>
                    ${chevronDownIcon}
                  </diamond-input>
                </diamond-form-group>

                <diamond-form-group
                  orientation="horizontal"
                  class="diamond-spacing-bottom-md"
                >
                  <label for="radio-group-2">Form group label</label>
                  <div role="radiogroup" id="radio-group-2">
                    <diamond-radio-checkbox>
                      <label>
                        <input type="radio" name="my-radio-2" value="yes" />
                        Item label one
                      </label>
                    </diamond-radio-checkbox>
                    <diamond-radio-checkbox>
                      <label>
                        <input type="radio" name="my-radio-2" value="no" />
                        Item label two
                      </label>
                    </diamond-radio-checkbox>
                  </div>
                </diamond-form-group>

                <diamond-form-group
                  orientation="horizontal"
                  class="diamond-spacing-bottom-md"
                >
                  <label for="radio-group-3">Form group label</label>
                  <div role="radiogroup" id="radio-group-3">
                    <diamond-radio-checkbox>
                      <label>
                        <input type="radio" name="my-radio-3" value="yes" />
                        Item label one
                      </label>
                    </diamond-radio-checkbox>
                    <diamond-radio-checkbox>
                      <label>
                        <input type="radio" name="my-radio-3" value="no" />
                        Item label two
                      </label>
                    </diamond-radio-checkbox>
                  </div>
                </diamond-form-group>

                <hr class="diamond-spacing-top-md diamond-spacing-bottom-md" />
                <diamond-grid wrap="wrap">
                  <diamond-grid-item small-mobile="12" tablet="6">
                    <diamond-button width="full-width">
                      <button type="button">Button text</button>
                    </diamond-button>
                  </diamond-grid-item>
                  <diamond-grid-item small-mobile="12" tablet="6">
                    <diamond-button width="full-width">
                      <button type="button">Button text</button>
                    </diamond-button>
                  </diamond-grid-item>
                </diamond-grid>
              </diamond-card>

              <diamond-card class="diamond-spacing-bottom-lg">
                <diamond-grid
                  justify-content="space-between"
                  align-items="center"
                >
                  <diamond-grid-item>
                    <h2
                      class="diamond-text-size-h3 diamond-spacing-bottom-none"
                    >
                      Card title
                    </h2>
                  </diamond-grid-item>
                  <diamond-grid-item> ${infoButton} </diamond-grid-item>
                </diamond-grid>
                <hr class="diamond-spacing-top-md diamond-spacing-bottom-md" />
                <diamond-link variant="no-underline">
                  <button type="button">${chevronDownIcon} Button text</button>
                </diamond-link>
              </diamond-card>
            </div>

            <diamond-grid justify-content="flex-end">
              <diamond-grid-item small-mobile="12" tablet="6">
                <diamond-button width="full-width" variant="primary">
                  <button type="button">Button text</button>
                </diamond-button>
              </diamond-grid-item>
            </diamond-grid>
          </diamond-wrap>
        </diamond-section>
      </main>
    </diamond-app>
  `,
};
