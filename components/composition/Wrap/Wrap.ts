export interface WrapAttributes {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
  gutter: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-wrap': WrapAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-wrap': WrapAttributes &
        React.HTMLAttributes<HTMLElement> & { key?: string } & { key?: string };
    }
  }
}
