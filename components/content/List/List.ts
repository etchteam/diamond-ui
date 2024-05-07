import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface ListAttributes {
  variant?: 'unstyled' | 'icon';
  spacing?:
    | 'none'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'fluid-sm'
    | 'fluid'
    | 'fluid-lg';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-list': ListAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-list': JSXCustomElement<ListAttributes>;
    }
  }
}
