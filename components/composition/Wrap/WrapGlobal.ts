import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('diamond-global-wrap')
export class GlobalWrap extends LitElement {
  @property() readonly gutter?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' =
    'md';
  @property() readonly size?:
    | 'small-mobile'
    | 'mobile'
    | 'large-mobile'
    | 'small-tablet'
    | 'tablet'
    | 'large-tablet'
    | 'small-desktop'
    | 'desktop'
    | 'large-desktop' = 'tablet';

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-global-wrap': GlobalWrap;
  }
}
