import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Recipes/Typography',
};

export const Headings: StoryObj = {
  render: () => html`
    <h1>Heading size 1</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>

    <h2>Heading size 2</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>

    <h3>Heading size 3</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>

    <h4>Heading size 4</h4>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>
  `,
};

export const FontSizes: StoryObj = {
  render: () => html`
    ${['xxxl', 'xxl', 'xl', 'lg', 'md', 'default', 'sm', 'xs'].map(
      (size) => html`
        <p class="diamond-text-size-${size}">This text is size ${size}.</p>
      `,
    )}
  `,
};
