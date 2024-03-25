import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingImage';

export default {
  component: 'diamond-loading-img',
};

export const Img: StoryObj = {
  render: (args) => html`
    <diamond-loading-img
      ?block="${args.block}"
      ?responsive="${args.responsive}"
      ?radius="${args.radius}"
    >
      <img
        src="https://placehold.it/300x300"
        alt="Placeholder"
        width="300"
        height="300"
      />
    </diamond-loading-img>
  `,
};

Img.args = {
  block: false,
  responsive: false,
  radius: false,
};
