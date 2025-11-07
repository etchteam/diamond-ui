import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface SectionAttributes {
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
    'dmd-section': SectionAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-ion': JSXCustomElement<SectionAttributes>;
    }
  }
}
