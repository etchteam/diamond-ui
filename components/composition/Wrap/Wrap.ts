import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { breakpoints } from '../../../lib/breakpoints';
import { cssMap } from '../../../lib/css-map';

const gutters = ['xs', 'sm', 'lg', 'xl'];

@customElement('diamond-wrap')
export class Wrap extends LitElement {
  @property() readonly gutter?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' =
    'md';
  @property() readonly size?:
    | 'small-mobile'
    | 'mobile'
    | 'large-mobile'
    | 'small-tablet'
    | 'tablet'
    | 'large-tablet'
    | 'small-desktop'
    | 'desktop'
    | 'large-desktop' = 'tablet';

  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      margin: auto;
      padding-inline: var(--diamond-spacing);
    }

    ${cssMap(
      gutters,
      (gutter) =>
        `:host([gutter="${gutter}"]) { padding-inline: var(--diamond-spacing-${gutter}); }`,
    )}

    :host([gutter="none"]) {
      padding-inline: 0;
    }

    ${unsafeCSS(
      breakpoints
        .map(
          (bp) => `
            :host([size="${bp.name}"]) {
              max-width: ${bp.value};
            }
        `,
        )
        .join(''),
    )}
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-wrap': Wrap;
  }
}
