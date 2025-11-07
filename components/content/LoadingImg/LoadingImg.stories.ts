import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingImg';

export default {
  component: 'dmd-loading-img',
  parameters: {
    docs: {
      description: {
        component:
          'Used as a loading placeholder before the content is available. For a full demo, see the [loading recipe](?path=/docs/recipes-loading-skeleton--docs).',
      },
    },
  },
};

export const LoadingImg: StoryObj = {
  render: (args) => html`
    <dmd-img>
      <dmd-ing-img
        height="${args.height}"
        width="${args.width}"
      ></dmd-loading-img>
    </dmd-img>
  `,
};

LoadingImg.args = {
  width: 400,
  height: 300,
};
