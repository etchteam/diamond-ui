import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pulse } from '../../../lib/pulse';

@customElement('diamond-loading-img')
export class LoadingImg extends LitElement {
  @property({ reflect: true }) width: string = '0';
  @property({ reflect: true }) height: string = '0';

  static readonly styles = [
    pulse,
    css`
      :host {
        aspect-ratio: var(--diamond-loading-img-width) /
          var(--diamond-loading-img-height);
        height: calc(var(--diamond-loading-img-height) * 1px);
        width: calc(var(--diamond-loading-img-width) * 1px);
      }
    `,
  ];

  render() {
    return html`
      <style>
        :host {
          --diamond-loading-img-width: ${this.width};
          --diamond-loading-img-height: ${this.height};
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
