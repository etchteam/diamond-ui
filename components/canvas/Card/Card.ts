import { LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html, unsafeStatic } from 'lit/static-html.js';

@customElement('diamond-card')
export class Card extends LitElement {
  /**
   * The href of the card if it is a link
   */
  @property() readonly href?: string;

  static styles = css`
    :host {
      display: block;
    }

    :host .card {
      display: block;
      background: var(--diamond-theme-background);
      border: 1px solid var(--diamond-theme-border-color);
      color: var(--diamond-theme-color);
      padding: var(--diamond-spacing);
      transition: border-color var(--diamond-transition);
    }

    :host([href]) .card {
      text-decoration: none;
    }

    @media (hover: hover) {
      :host([href]:hover) .card {
        border: 1px solid var(--diamond-theme-border-color-hover);
      }
    }
  `;

  render() {
    const tag = this.href ? 'a' : 'div';

    return html`
      <${unsafeStatic(tag)} href=${this.href} class="card">
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
