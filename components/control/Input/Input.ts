import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface InputAttributes {
  state?: 'valid' | 'invalid';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-input': InputAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-input': JSXCustomElement<InputAttributes>;
    }
  }
}
