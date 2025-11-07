import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface HelpTextAttributes {
  state?: 'valid' | 'invalid';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-help-text': HelpTextAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd--text': JSXCustomElement<HelpTextAttributes>;
    }
  }
}
