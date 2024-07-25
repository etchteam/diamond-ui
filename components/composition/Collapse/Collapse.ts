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
      @keyframes diamond-collapse-overflow {
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
          grid-template-rows var(--diamond-transition),
          content-visibility var(--diamond-transition),
          overflow var(--diamond-transition);
        transition-behavior: allow-discrete;
      }

      .diamond-collapse__content {
        overflow: hidden;
      }

      :host([open]:not([open='false'])) {
        animation: diamond-collapse-overflow var(--diamond-transition) forwards;
        content-visibility: visible;
        grid-template-rows: 1fr;
      }

      :host([open]:not([open='false'])) .diamond-collapse__content {
        animation: diamond-collapse-overflow var(--diamond-transition) forwards;
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
