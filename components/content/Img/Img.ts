import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('diamond-img')
export class Img extends LitElement {
  @property({ reflect: true }) readonly fit?: 'contain' | 'cover' | 'fill';

  static styles = css`
    :host {
      display: block;
    }

    ::slotted(img) {
      width: 100%;
      height: auto;
    }

    ::slotted(img[fit='contain']) {
      object-fit: contain;
    }

    ::slotted(img[fit='cover']) {
      object-fit: cover;
    }

    ::slotted(img[fit='fill']) {
      object-fit: fill;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-img': Img;
  }
}
