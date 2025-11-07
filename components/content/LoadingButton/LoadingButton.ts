import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pulse } from '../../../lib/pulse';

@customElement('dmd-loading-button')
export class LoadingButton extends LitElement {
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
    'dmd-ing-button': LoadingButton;
  }
}
