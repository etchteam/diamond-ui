import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('diamond-button')
export class Button extends LitElement {
  static styles = css`
    ::slotted(button) {
      border: 1px solid black;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-button': Button;
  }
}
