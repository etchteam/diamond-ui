import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../types/jsx-custom-element';

export interface CellAttributes {}

@customElement('docs-cell')
export class DocsCell extends LitElement {
  // eslint-disable-next-line spellcheck/spell-checker
  static readonly styles = css`
    :host {
      align-items: center;
      background-color: #eee;
      display: flex;
      height: 100px;
      justify-content: center;
      padding-inline: 0.5em;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'docs-cell': CellAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'docs-cell': JSXCustomElement<CellAttributes>;
    }
  }
}
