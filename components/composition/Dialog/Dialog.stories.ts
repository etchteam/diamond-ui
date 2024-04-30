import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../canvas/Card/Card';

const description = `
The Diamond Dialog provides an unopinionated area for any content
to be placed on top of the main app content.

Other than the backdrop, it does not provide any styles. Recommended
to be used with a wrap and a card.
`;

export default {
  component: 'diamond-dialog',
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        height: '22rem',
      },
      description: {
        component: description,
      },
    },
  },
};

export const Dialog: StoryObj = {
  render: () => html`
    <diamond-button>
      <button type="button" id="toggle">Open dialog</button>
    </diamond-button>
    <dialog>
      <diamond-wrap size="xs" gutter="none">
        <diamond-card border radius>
          <h3>Modal title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form method="dialog">
            <button>Close</button>
          </form>
        </diamond-card>
      </diamond-wrap>
    </dialog>
    <script>
      document.getElementById('toggle').addEventListener('click', () => {
        document.querySelector('dialog').showModal();
      });
      document.querySelector('dialog').showModal();
    </script>
  `,
};
