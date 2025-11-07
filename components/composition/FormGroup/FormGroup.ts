import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface FormGroupAttributes {
  orientation?: 'horizontal' | 'vertical';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-form-group': FormGroupAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-form-group': JSXCustomElement<FormGroupAttributes>;
    }
  }
}
