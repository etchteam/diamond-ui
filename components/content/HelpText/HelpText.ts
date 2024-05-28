import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface HelpTextAttributes {
  state?: 'valid' | 'invalid';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-help-text': HelpTextAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-help-text': JSXCustomElement<HelpTextAttributes>;
    }
  }
}
