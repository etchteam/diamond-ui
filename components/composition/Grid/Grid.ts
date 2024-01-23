import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const directions = ['column', 'row-reverse', 'column-reverse'];

const justify = [
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];

const align = ['flex-end', 'center'];

const gap = ['xs', 'sm', 'lg', 'xl'];

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

    ${unsafeCSS(
      directions
        .map(
          (direction) =>
            `:host([direction="${direction}"]) { flex-direction: ${direction}; }`,
        )
        .join('\n'),
    )}

    ${unsafeCSS(
      justify
        .map(
          (justify) =>
            `:host([justify-content="${justify}"]) { justify-content: ${justify}; }`,
        )
        .join('\n'),
    )}

    ${unsafeCSS(
      align
        .map(
          (align) =>
            `:host([align-items="${align}"]) { align-items: ${align}; }`,
        )
        .join('\n'),
    )}

    ${unsafeCSS(
      gap
        .map(
          (gap) =>
            `:host([gap="${gap}"]) { --diamond-grid-gap: var(--diamond-spacing-${gap}); }`,
        )
        .join('\n'),
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
