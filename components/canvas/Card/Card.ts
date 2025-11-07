import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface CardAttributes {
  border?: string | boolean;
  shadow?: string | boolean;
  muted?: string | boolean;
  radius?: string | boolean;
  padding?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'fluid-sm'
    | 'fluid'
    | 'fluid-lg'
    | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-card': CardAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-card': JSXCustomElement<CardAttributes>;
    }
  }
}
