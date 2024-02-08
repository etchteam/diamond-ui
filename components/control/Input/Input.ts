export interface InputAttributes {
  state?: 'valid' | 'invalid';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-input': InputAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-input': InputAttributes & React.HTMLAttributes<HTMLElement> & { key?: string };
    }
  }
}
