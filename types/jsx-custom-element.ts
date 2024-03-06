export type JSXCustomElement = React.HTMLAttributes<HTMLElement> & {
  key?: string | number;
  class?: string;
};
