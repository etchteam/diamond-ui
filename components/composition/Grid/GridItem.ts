export {};

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

declare global {
  interface HTMLElementTagNameMap {
    'diamond-grid-item': {
      grow?: boolean;
      shrink?: boolean;
      smallMobile?: Column;
      mobile?: Column;
      largeMobile?: Column;
      smallTablet?: Column;
      tablet?: Column;
      largeTablet?: Column;
      smallDesktop?: Column;
      desktop?: Column;
      largeDesktop?: Column;
    };
  }
}
