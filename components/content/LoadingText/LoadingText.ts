import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pulse } from '../../../lib/pulse';

@customElement('diamond-loading-text')
export class LoadingText extends LitElement {
  @property({ reflect: true, attribute: 'aria-hidden' }) ariaHidden:
    | string
    | null = 'true';
  static readonly styles = [pulse];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-loading-text': LoadingText;
  }
}
