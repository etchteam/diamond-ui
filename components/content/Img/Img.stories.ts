import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './Img';

export default {
  component: 'diamond-img',
  argTypes: {
    objectFit: {
      control: {
        type: 'radio',
      },
      options: ['fill', 'cover', 'contain'],
    },
  },
};

export const Img: StoryObj = {
  render: (args) => html`
    <diamond-img
      ?block="${args.block}"
      ?responsive="${args.responsive}"
      aspect-ratio="${args.aspectRatio}"
      ?radius="${args.radius}"
      object-fit="${args.objectFit}"
      object-position="${args.objectPosition}"
    >
      <img
        src="https://placehold.co/300x300"
        alt="Placeholder"
        width="300"
        height="300"
      />
    </diamond-img>
  `,
};

Img.args = {
  block: false,
  responsive: false,
  radius: false,
  aspectRatio: 'auto',
  objectFit: 'fill',
  objectPosition: '50% 50%',
};
