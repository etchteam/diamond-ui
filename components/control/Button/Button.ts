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

// Define the custom element with the specified attributes
customElements.define('diamond-button', DiamondButton);

// Declare the custom element in the global HTMLElementTagNameMap
declare global {
  interface HTMLElementTagNameMap {
    'diamond-button': ButtonAttributes;
  }
}

// Declare the custom element in the JSX namespace for React
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-button': ButtonAttributes & JSXCustomElement;
    }
  }
}
