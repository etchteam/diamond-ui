export {};

declare global {
  interface HTMLElementTagNameMap {
    'diamond-grid': {
      wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
      inline?: boolean;
      direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
      justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
      alignItems?: 'flex-start' | 'flex-end' | 'center';
      gap?: 'xs' | 'sm' | 'lg' | 'xl';
    };
  }
}
