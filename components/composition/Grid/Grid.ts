import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface GridAttributes {
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  inline?: string | boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap?: 'xs' | 'sm' | 'lg' | 'xl';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-grid': GridAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-grid': JSXCustomElement<GridAttributes>;
    }
  }
}
