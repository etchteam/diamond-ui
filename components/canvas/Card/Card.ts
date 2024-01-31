export {};

declare global {
  interface HTMLElementTagNameMap {
    'diamond-card': {
      border?: boolean;
      shadow?: boolean;
      muted?: boolean;
      radius?: boolean;
      padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    };
  }
}
