import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { cssMap } from '../../../lib/css-map';

const directions = ['column', 'row-reverse', 'column-reverse'];

const justifys = [
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];

const aligns = ['flex-end', 'center'];

const gaps = ['xs', 'sm', 'lg', 'xl'];

@customElement('diamond-grid')
export class Grid extends LitElement {
  @property() readonly wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  @property({ type: Boolean }) readonly inline?: boolean;
  @property() readonly direction?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse' = 'row';
  @property() readonly justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly' = 'flex-start';
  @property() readonly alignItems?: 'flex-start' | 'flex-end' | 'center' =
    'flex-start';

  static styles = css`
    :host {
      --diamond-grid-gap: var(--diamond-spacing);
      display: flex;
      margin: calc(var(--diamond-grid-gap) * -0.5);
    }

    :host([inline]) {
      display: inline-flex;
    }

    :host([wrap='wrap']) {
      flex-wrap: wrap;
    }

    :host([wrap='wrap-reverse']) {
      flex-wrap: wrap-reverse;
    }

    ${cssMap(
      directions,
      (direction) =>
        `:host([direction="${direction}"]) { flex-direction: ${direction}; }`,
    )}

    ${cssMap(
      justifys,
      (justify) =>
        `:host([justify-content="${justify}"]) { justify-content: ${justify}; }`,
    )}

    ${cssMap(
      aligns,
      (align) => `:host([align-items="${align}"]) { align-items: ${align}; }`,
    )}

    ${cssMap(
      gaps,
      (gap) =>
        `:host([gap="${gap}"]) { --diamond-grid-gap: var(--diamond-spacing-${gap}); }`,
    )}
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-grid': Grid;
  }
}
