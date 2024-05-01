import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface CollapseAttributes {
  open?: boolean;
}

@customElement('diamond-collapse')
export class Collapse extends LitElement {
  @property({ reflect: true, type: Boolean }) open?: boolean;

  static readonly styles = [
    css`
      :host {
        content-visibility: hidden;
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition:
          grid-template-rows var(--diamond-transition),
          content-visibility var(--diamond-transition);
        transition-behavior: allow-discrete;
      }

      :host([open]:not([open='false'])) {
        content-visibility: visible;
        grid-template-rows: 1fr;
      }

      .diamond-collapse__content {
        overflow: hidden;
      }
    `,
  ];

  render() {
    return html`
      <div class="diamond-collapse__content">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-collapse': CollapseAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-collapse': JSXCustomElement<CollapseAttributes>;
    }
  }
}
