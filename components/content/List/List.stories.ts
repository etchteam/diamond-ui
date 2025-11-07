import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../Icon/Icon';
import './List';

const description = `
The list component adds a bit more power to HTML lists, such as spacing control and icon support.
`;

export default {
  component: 'dmd-list',
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['unstyled', 'icon'],
    },
    spacing: {
      control: {
        type: 'select',
      },
      options: [
        'none',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'fluid-sm',
        'fluid',
        'fluid-lg',
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const List: StoryObj = {
  render: (args) => html`
    <dmd-list variant="${args.variant}" spacing="${args.spacing}">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </dmd-list>
  `,
};

List.args = {
  spacing: 'none',
};

export const Unstyled: StoryObj = {
  render: (args) => html`
    <dmd-list variant="${args.variant}" spacing="${args.spacing}">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </dmd-list>
  `,
};

Unstyled.args = {
  variant: 'unstyled',
};

const unstyledDescription = `
Removes the list styles. This is useful for semantic lists that we don't want to see visually.

**Note**: Safari does not recognize ordered or unordered lists as lists in the accessibility tree if they have a list-style value of none, unless the list is nested within the <nav> navigation element. This behavior is intentional and is not considered a bug.

To ensure lists are announced as lists, include \`role="list"\` to \`<ol>\` and \`<ul>\` elements, especially if the list is not nested in a \`<nav>\`. This restores list semantics without affecting the design.
`;

Unstyled.parameters = {
  docs: {
    description: {
      story: unstyledDescription,
    },
  },
};

export const Icon: StoryObj = {
  render: (args) => html`
    <dmd-list variant="${args.variant}" spacing="${args.spacing}">
      <ul>
        <li>
          <dmd-icon>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M20.6644 5.2526C21.0772 5.61952 21.1143 6.25159 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33565C19.6195 4.92286 20.2516 4.88568 20.6644 5.2526Z"
                fill="#0D0D0D"
              ></path>
            </svg>
          </dmd-icon>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          fermentum pharetra massa sed convallis. Mauris finibus justo sit amet
          lorem scelerisque consectetur.
        </li>
        <li>
          <dmd-icon>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M20.6644 5.2526C21.0772 5.61952 21.1143 6.25159 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33565C19.6195 4.92286 20.2516 4.88568 20.6644 5.2526Z"
                fill="#0D0D0D"
              ></path>
            </svg>
          </dmd-icon>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          fermentum pharetra massa sed convallis. Mauris finibus justo sit amet
          lorem scelerisque consectetur.
        </li>
        <li>
          <dmd-icon>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#0D0D0D"
              ></path>
            </svg>
          </dmd-icon>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          fermentum pharetra massa sed convallis. Mauris finibus justo sit amet
          lorem scelerisque consectetur.
        </li>
      </ul>
    </dmd-list>
  `,
};

Icon.args = {
  variant: 'icon',
};

export const DefinitionList: StoryObj = {
  render: (args) => html`
    <dmd-list variant="${args.variant}" spacing="${args.spacing}">
      <dl>
        <div>
          <dt>Term</dt>
          <dd>Definition</dd>
        </div>
        <div>
          <dt>Term</dt>
          <dd>Item 3</dd>
        </div>
        <div>
          <dt>Term</dt>
          <dd>Item 3</dd>
        </div>
      </dl>
    </dmd-list>
  `,
};

DefinitionList.args = {
  spacing: 'none',
};
