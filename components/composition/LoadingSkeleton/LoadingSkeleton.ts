import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface LoadingSkeletonAttributes {
  loading?: 'true' | 'false';
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-loading-skeleton': LoadingSkeletonAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-loading-skeleton': LoadingSkeletonAttributes & JSXCustomElement;
    }
  }
}
