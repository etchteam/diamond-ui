import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface EnterAttributes {
  type?: 'fade' | 'fade-in-up' | 'boing';
  enterOnScroll?: string | boolean;
  delay?: string | number;
  /**
   * Applies display grid so that children fill the height and width of the component
   */
  fill?: string | boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-enter': EnterAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-enter': JSXCustomElement<EnterAttributes>;
    }
  }
}
