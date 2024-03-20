export type JSXCustomElement<T = object> = T &
  Omit<React.HTMLAttributes<HTMLElement>, 'size'> & {
    key?: string | number;
    class?: string;
    slot?: string;
    shadowRoot?: ShadowRoot;
  };
