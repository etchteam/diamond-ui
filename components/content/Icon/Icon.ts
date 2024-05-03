import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface IconAttributes {
  variant: 'default' | 'circle';
  label: string;
}

@customElement('diamond-icon')
export class Icon extends LitElement {
  @property({ reflect: true }) variant?: IconAttributes['variant'];
  @property() label: IconAttributes['label'] = '';

  render() {
    const { label } = this;

    return html`
      <div
        part="icon"
        aria-hidden="${!label}"
        aria-label="${label || nothing}"
        role="img"
      >
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
