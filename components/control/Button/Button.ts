export {};

declare global {
  interface HTMLElementTagNameMap {
    'diamond-button': {
      size?: 'sm' | 'md' | 'lg';
      variant?: 'primary' | 'secondary' | 'text';
      width?: 'full-width' | 'full-width-mobile' | 'square';
    };
  }
}
