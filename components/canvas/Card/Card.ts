import { LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';

import { cssMap } from '../../../lib/css-map';

const paddings = ['xs', 'sm', 'lg', 'xl'];

@customElement('diamond-card')
export class Card extends LitElement {
  @property({ type: Boolean }) readonly border?: boolean;
  @property({ type: Boolean }) readonly shadow?: boolean;
  @property({ type: Boolean }) readonly muted?: boolean;
  @property({ type: Boolean }) readonly radius?: boolean;
  @property() readonly padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' =
    'md';

  static styles = css`
    :host {
      appearance: none;
      display: block;
      background: var(--diamond-theme-background);
      border: 0 none;
      color: var(--diamond-theme-color);
      padding: var(--diamond-spacing);
      text-align: inherit;
      text-decoration: none;
      transition: border-color var(--diamond-transition);
    }

    :host([shadow]) {
      box-shadow: var(--diamond-shadow);
    }

    :host([muted]) {
      background: var(--diamond-theme-background-muted);
    }

    :host([radius]) {
      border-radius: var(--diamond-radius);
    }

    ${cssMap(
      paddings,
      (padding) =>
        `:host([padding="${padding}"]) { padding: var(--diamond-spacing-${padding}); }`,
    )}

    :host([padding="none"]) {
      padding: 0;
    }

    :host([border]) {
      border: 1px solid var(--diamond-theme-border-color);
    }

    @media (hover: hover) {
      :host([border][href]:hover) {
        border-color: var(--diamond-theme-border-color-hover);
      }
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-card': Card;
  }
}
