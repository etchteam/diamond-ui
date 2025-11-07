import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface CollapseAttributes {
  open?: boolean;
}

@customElement('dmd-collapse')
export class Collapse extends LitElement {
  @property({ reflect: true, type: Boolean }) open?: boolean;

  static readonly styles = [
    css`
      @keyframes dmd-collapse-overflow {
        0%,
        99% {
          overflow: hidden;
        }
        100% {
          overflow: visible;
        }
      }
      :host {
        content-visibility: hidden;
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition:
          grid-template-rows var(--dmd-transition),
          content-visibility var(--dmd-transition),
          overflow var(--dmd-transition);
        transition-behavior: allow-discrete;
      }

      .dmd-collapse__content {
        overflow: hidden;
      }

      :host([open]:not([open='false'])) {
        animation: dmd-collapse-overflow var(--dmd-transition) forwards;
        content-visibility: visible;
        grid-template-rows: 1fr;
      }

      :host([open]:not([open='false'])) .dmd-collapse__content {
        animation: dmd-collapse-overflow var(--dmd-transition) forwards;
      }
    `,
  ];

  render() {
    return html`
      <div class="dmd-collapse__content">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-collapse': CollapseAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-collapse': JSXCustomElement<CollapseAttributes>;
    }
  }
}
