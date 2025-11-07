import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface InputButtonGroupAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-input-button-group': InputButtonGroupAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-input-button-group': JSXCustomElement<InputButtonGroupAttributes>;
    }
  }
}
