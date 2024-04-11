import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface LoadingButtonAttributes {
  size?: 'sm' | 'md' | 'lg';
  width?: 'full-width' | 'full-width-mobile' | 'square';
}

export class DiamondLoadingButton extends HTMLElement {
  constructor() {
    super();
    this.classList.add('diamond-button-shared');
  }
}

customElements.define('diamond-loading-button', DiamondLoadingButton);

declare global {
  interface HTMLElementTagNameMap {
    'diamond-loading-button': LoadingButtonAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-loading-button': LoadingButtonAttributes & JSXCustomElement;
    }
  }
}
