import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface ButtonAttributes {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'text';
  width?: 'full-width' | 'full-width-mobile' | 'square';
}

export class DiamondButton extends HTMLElement {
  constructor() {
    super();
    // Ensure the enforced class is always applied to the custom element
    this.classList.add('diamond-button-shared');
  }
}

customElements.define('diamond-button', DiamondButton);

declare global {
  interface HTMLElementTagNameMap {
    'diamond-button': ButtonAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-button': ButtonAttributes & JSXCustomElement;
    }
  }
}
