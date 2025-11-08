import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface LinkAttributes {
  variant?: 'underline' | 'no-underline';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-link': LinkAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-link': JSXCustomElement<LinkAttributes>;
    }
  }
}
