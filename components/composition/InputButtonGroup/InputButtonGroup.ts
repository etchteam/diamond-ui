import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface InputButtonGroupAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-input-button-group': InputButtonGroupAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-input-button-group': JSXCustomElement<InputButtonGroupAttributes>;
    }
  }
}
