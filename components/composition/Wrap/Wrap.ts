export {};

declare global {
  interface HTMLElementTagNameMap {
    'diamond-wrap': {
      size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
      gutter: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    };
  }
}
