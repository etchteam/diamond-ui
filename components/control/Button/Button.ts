import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface ButtonAttributes {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'text';
  width?: 'full-width' | 'full-width-mobile' | 'square';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-button': ButtonAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-button': JSXCustomElement<ButtonAttributes>;
    }
  }
}
