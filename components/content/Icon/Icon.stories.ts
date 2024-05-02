import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Icon';

const description = `
Wraps an svg icon to provide alignment and sizing.

Icons must have the appropriate fill or stroke set to currentColor.

Icons are hidden from screen readers by default and should be accompanied by text. If an icon must be used on its own, add an aria-label to the icon element.
`;

export default {
  component: 'diamond-icon',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    shape: {
      control: {
        type: 'radio',
      },
      options: ['default', 'circle'],
    },
  },
};

export const Icon: StoryObj = {
  render: (args) => html`
    <diamond-icon shape="${args.shape}">
      <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
        <path
          d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
          fill="currentColor"
        ></path>
      </svg>
    </diamond-icon>
    This is some text next to the icon
  `,
};

Icon.args = {
  shape: 'default',
};

const sizes = ['h1', 'h2', 'h3', 'h4', 'md', 'default', 'sm', 'xs'];

export const Sizes: StoryObj = {
  render: () => html`
    ${sizes.map(
      (size) => html`
        <p class="diamond-text-size-${size}">
          <diamond-icon>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                fill="currentColor"
              ></path>
            </svg>
          </diamond-icon>
          The quick brown fox jumps over the lazy dog.
        </p>
      `,
    )}
  `,
};

Sizes.parameters = {
  docs: {
    description: {
      story:
        'Icons inherit their size from the current text size or can be sized using text size classes.',
    },
  },
};

export const IconInAGrid: StoryObj = {
  render: () => html`
    <diamond-grid align-items="baseline" gap="xs">
      <diamond-grid-item>
        <diamond-icon class="diamond-text-size-h3">
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
              fill="currentColor"
            ></path>
          </svg>
        </diamond-icon>
      </diamond-grid-item>
      <diamond-grid-item grow shrink>
        <h3 class="diamond-spacing-bottom-none">Title text</h3>
      </diamond-grid-item>
    </diamond-grid>
  `,
};

IconInAGrid.parameters = {
  docs: {
    description: {
      story:
        'Icons in a grid can be aligned to the text with the baseline alignment.',
    },
  },
};

const themes = ['light', 'medium', 'dark'];

export const IconColors: StoryObj = {
  render: () => html`
    ${themes.map(
      (theme) => html`
        <diamond-section class="diamond-theme-${theme}">
          <diamond-wrap gutter="md">
            <p>
              <diamond-icon>
                <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
                  <path
                    d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </diamond-icon>
              This is a ${theme} theme
            </p>
          </diamond-wrap>
        </diamond-section>
      `,
    )}
  `,
};

IconColors.parameters = {
  docs: {
    description: {
      story: 'Icon colours are inherited from the current theme.',
    },
  },
};

export const DifferentIconLibraries: StoryObj = {
  render: () => html`
    <p>
      <diamond-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
          />
        </svg>
      </diamond-icon>
      <a
        href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:home:FILL@0;wght@400;GRAD@0;opsz@24"
      >
        Material symbols
      </a>
    </p>

    <p>
      <diamond-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </diamond-icon>
      <a href="https://heroicons.com/">Hero icons</a>
    </p>

    <p>
      <diamond-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-house"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
          />
        </svg>
      </diamond-icon>
      <a href="https://icons.getbootstrap.com/">Bootstrap icons</a>
    </p>

    <p>
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
            d="M11.3356 2.25259C11.7145 1.9158 12.2855 1.9158 12.6644 2.25259L21.6644 10.2526C22.0772 10.6195 22.1143 11.2516 21.7474 11.6644C21.3805 12.0771 20.7484 12.1143 20.3356 11.7474L20 11.4491V19C20 20.1046 19.1046 21 18 21H6.00001C4.89544 21 4.00001 20.1046 4.00001 19V11.4491L3.66437 11.7474C3.25159 12.1143 2.61952 12.0771 2.2526 11.6644C1.88568 11.2516 1.92286 10.6195 2.33565 10.2526L11.3356 2.25259ZM6.00001 9.67129V19H9.00001V14C9.00001 13.4477 9.44773 13 10 13H14C14.5523 13 15 13.4477 15 14V19H18V9.67129L12 4.33795L6.00001 9.67129ZM13 19V15H11V19H13Z"
            fill="#0D0D0D"
          ></path>
        </svg>
      </diamond-icon>
      <a href="https://icons.mono.company/">Mono icons</a>
    </p>

    <p>
      <diamond-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-home"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </diamond-icon>
      <a href="https://feathericons.com/">Feather icons</a>
    </p>
  `,
};

DifferentIconLibraries.parameters = {
  docs: {
    description: {
      story:
        'You can use SVGs from any icon library. This story tests a few common libraries for alignment.',
    },
  },
};
