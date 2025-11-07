import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pulse } from '../../../lib/pulse';

@customElement('dmd-loading-img')
export class LoadingImg extends LitElement {
  @property({ reflect: true }) width: string = '0';
  @property({ reflect: true }) height: string = '0';

  static readonly styles = [
    pulse,
    css`
      :host {
        aspect-ratio: var(--dmd-loading-img-width) /
          var(--dmd-loading-img-height);
        height: calc(var(--dmd-loading-img-height) * 1px);
        width: calc(var(--dmd-loading-img-width) * 1px);
      }
    `,
  ];

  render() {
    return html`
      <style>
        :host {
          --dmd-loading-img-width: ${this.width};
          --dmd-loading-img-height: ${this.height};
        }
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-loading-img': LoadingImg;
  }
}
