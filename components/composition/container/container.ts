import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Size } from '../../../types/size';

@customElement('diamond-container')
export class Container extends LitElement {
  @property() readonly size?: Size;

  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      max-width: 960px;
    }

    :host([size='small']) {
      max-width: 480px;
    }

    :host([size='large']) {
      max-width: 1440px;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-container': Container;
  }
}
