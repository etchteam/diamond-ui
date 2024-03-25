import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface ImgAttributes {
  block?: string | boolean;
  responsive?: string | boolean;
  radius?: string | boolean;
}

@customElement('diamond-loading-img')
export class Img extends LitElement {
  @property({ reflect: true }) block?: string | boolean;
  @property({ reflect: true }) responsive?: string | boolean;
  @property({ reflect: true }) radius?: string | boolean;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-loading-img': ImgAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-loading-img': ImgAttributes & JSXCustomElement;
    }
  }
}
