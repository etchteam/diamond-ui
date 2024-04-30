import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Collapse';

export default {
  component: 'diamond-collapse',
};

export const Collapse: StoryObj = {
  render: () => html`
    <diamond-button>
      <button type="button" id="toggle">Toggle collapse</button>
    </diamond-button>
    <diamond-collapse open>
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
    </diamond-collapse>
    <script>
      document.getElementById('toggle').addEventListener('click', () => {
        const collapse = document.querySelector('diamond-collapse');
        collapse.open = !collapse.open;
      });
    </script>
  `,
};
