export {};

declare global {
  interface HTMLElementTagNameMap {
    'diamond-button': {
      size?: 'sm' | 'md' | 'lg';
      variant?: 'primary' | 'secondary' | 'tertiary';
    };
  }
}
