import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pulse } from '../../../lib/pulse';

@customElement('diamond-loading-img')
export class LoadingImg extends LitElement {
  @property() width: string = '0';
  @property() height: string = '0';

  static readonly styles = [
    css`
      :host {
        aspect-ratio: var(--diamond-loading-img-width) /
          var(--diamond-loading-img-height);
        display: inline-block;
        animation: pulse var(--diamond-pulse-duration) infinite linear;
        width: var(--diamond-loading-img-width, 100px);
        height: var(--diamond-loading-img-height, 100px);
        background: linear-gradient(
          90deg,
          var(--diamond-color-grey-100) 25%,
          var(--diamond-color-grey-300) 50%,
          var(--diamond-color-grey-100) 75%
        );
        background-size: 200% 100%;
        color: transparent;
        user-select: none;
      }
    `,
    pulse,
  ];

  render() {
    return html`
      <style>
        :host {
          --diamond-loading-img-width: ${this.width}px;
          --diamond-loading-img-height: ${this.height}px;
        }
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-loading-img': LoadingImg;
  }
}
