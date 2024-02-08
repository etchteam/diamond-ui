import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface CardAttributes {
  border?: boolean;
  shadow?: boolean;
  muted?: boolean;
  radius?: boolean;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-card': CardAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-card': CardAttributes & JSXCustomElement;
    }
  }
}
