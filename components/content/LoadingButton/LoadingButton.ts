import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface LoadingButtonAttributes {
  variant?: 'primary' | 'secondary' | 'text';
  width?: 'full-width' | 'full-width-mobile' | 'square';
}

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
