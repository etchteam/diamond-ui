import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface ImgAttributes {
  block?: string | boolean;
  responsive?: string | boolean;
  aspectRatio?: string;
  radius?: string | boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
}

@customElement('dmd-img')
export class Img extends LitElement {
  @property({ reflect: true, attribute: 'aria-hidden' }) ariaHidden:
    | string
    | null = 'true';
  @property({ reflect: true }) block?: string | boolean;
  @property({ reflect: true }) responsive?: string | boolean;
  @property({ reflect: true, attribute: 'aspect-ratio' }) aspectRatio?: string =
    'inherit';
  @property({ reflect: true }) radius?: string | boolean;
  @property({ reflect: true, attribute: 'object-fit' }) objectFit?:
    | 'fill'
    | 'cover'
    | 'contain' = 'fill';
  @property({ reflect: true, attribute: 'object-position' })
  objectPosition = '50% 50%';

  render() {
    return html`
      <style>
        :host {
          --dmd-img-aspect-ratio: ${this.aspectRatio};
          --dmd-img-object-fit: ${this.objectFit};
          --dmd-img-object-position: ${this.objectPosition};
        }
      </style>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-img': ImgAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-img': JSXCustomElement<ImgAttributes>;
    }
  }
}
