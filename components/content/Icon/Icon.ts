import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface IconAttributes {
  shape: 'default' | 'circle';
}

@customElement('diamond-icon')
export class Icon extends LitElement {
  @property({ reflect: true }) shape?: IconAttributes['shape'];

  render() {
    return html`
      <div part="icon" aria-hidden="true">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-icon': IconAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-icon': JSXCustomElement<IconAttributes>;
    }
  }
}
