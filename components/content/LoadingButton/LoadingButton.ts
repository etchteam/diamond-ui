import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { pulse } from '../../../lib/pulse';

@customElement('diamond-loading-button')
export class LoadingButton extends LitElement {
  static readonly styles = [
    css`
      :host {
        animation: pulse var(--diamond-pulse-duration) infinite linear;
        appearance: none;
        background: linear-gradient(
          90deg,
          var(--diamond-color-grey-100) 25%,
          var(--diamond-color-grey-300) 50%,
          var(--diamond-color-grey-100) 75%
        );
        background-size: 200% 100%;
        color: transparent;
        display: inline-block;
        user-select: none;
      }
    `,
    pulse,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-loading-button': LoadingButton;
  }
}
