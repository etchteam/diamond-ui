import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Collapse';

const description = `
Animates the expansion and collapse of content within
when the open prop is toggled.

The button to control the collapse must include aria-controls and aria-expanded attributes.
`;

export default {
  component: 'dmd-collapse',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const Collapse: StoryObj = {
  render: () => html`
    <dmd-button class="dmd-spacing-bottom-md">
      <button
        type="button"
        id="toggle"
        aria-controls="collapse"
        aria-expanded="true"
      >
        Toggle collapse
      </button>
    </dmd-button>
    <dmd-apse open id="collapse">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        suscipit leo sodales sem sollicitudin maximus.
      </p>
      <p>
        Vestibulum viverra turpis sed nisl malesuada lacinia. Aliquam turpis
        mauris, egestas vulputate erat ut, maximus efficitur augue. Phasellus in
        ante sit amet enim tristique viverra aliquam vitae libero.
      </p>
      <p>
        Nulla id enim vehicula, varius leo et, sagittis libero. Nam vel dolor
        fringilla, viverra massa ut, pharetra enim. Praesent non varius nisl.
      </p>
    </dmd-collapse>
    <script>
      document.addEventListener(
        'DOMContentLoaded',
        () => {
          const button = document.getElementById('toggle');
          button.addEventListener('click', () => {
            const collapse = document.querySelector('dmd-collapse');
            collapse.open = !collapse.open;
            button.setAttribute('aria-expanded', collapse.open.toString());
          });
        },
        { once: true },
      );
    </script>
  `,
};
