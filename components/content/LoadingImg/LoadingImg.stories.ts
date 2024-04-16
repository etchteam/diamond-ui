import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingImg';

export default {
  component: 'diamond-loading-img',
};

export const LoadingImg: StoryObj = {
  render: (args) => html`
    <diamond-img>
      <diamond-loading-img
        height="${args.height}"
        width="${args.width}"
      ></diamond-loading-img>
    </diamond-img>
  `,
};

LoadingImg.args = {
  width: 400,
  height: 300,
};
