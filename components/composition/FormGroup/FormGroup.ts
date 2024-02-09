import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface FormGroupAttributes {
  orientation?: 'horizontal' | 'vertical';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-form-group': FormGroupAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-form-group': FormGroupAttributes & JSXCustomElement;
    }
  }
}
