import { JSXCustomElement } from '../../../types/jsx-custom-element';

type Column =
  | 'auto'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export interface GridItemAttributes {
  grow?: boolean;
  shrink?: boolean;
  /**
   * Applies display grid so that children fill the height and width of the grid item
   */
  fill?: boolean;
  smallMobile?: Column;
  mobile?: Column;
  largeMobile?: Column;
  smallTablet?: Column;
  tablet?: Column;
  largeTablet?: Column;
  smallDesktop?: Column;
  desktop?: Column;
  largeDesktop?: Column;
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-grid-item': GridItemAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-grid-item': GridItemAttributes & JSXCustomElement;
    }
  }
}
