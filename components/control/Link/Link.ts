import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface LinkAttributes {
  variant?: 'underline' | 'no-underline';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-link': LinkAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-link': JSXCustomElement<LinkAttributes>;
    }
  }
}
