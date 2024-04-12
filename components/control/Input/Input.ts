import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface InputAttributes {
  state?: 'valid' | 'invalid';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-input': InputAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-input': JSXCustomElement<InputAttributes>;
    }
  }
}
