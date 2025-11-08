import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface WrapAttributes {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
  gutter?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-wrap': WrapAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-wrap': JSXCustomElement<WrapAttributes>;
    }
  }
}
