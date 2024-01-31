export {};

declare global {
  interface HTMLElementTagNameMap {
    'diamond-wrap': {
      size:
        | 'small-mobile'
        | 'mobile'
        | 'large-mobile'
        | 'small-tablet'
        | 'tablet'
        | 'large-tablet'
        | 'small-desktop'
        | 'desktop'
        | 'large-desktop';
      gutter: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    };
  }
}
