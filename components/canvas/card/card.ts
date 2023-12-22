import { LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html, unsafeStatic } from 'lit/static-html.js';

@customElement('diamond-card')
export class Card extends LitElement {
  @property() readonly href?: string;

  static styles = css`
    :host {
      display: block;
    }

    :host .card {
      display: block;
      border: 1px solid black;
      color: black;
    }

    :host([href]) .card {
      text-decoration: none;
    }

    @media (hover: hover) {
      :host([href]:hover) .card {
        border: 1px solid blue;
      }
    }
  `;

  render() {
    const tag = this.href ? 'a' : 'div';

    return html`
      <${unsafeStatic(tag)} href=${this.href} part="card" class="card">
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-card': Card;
  }
}
