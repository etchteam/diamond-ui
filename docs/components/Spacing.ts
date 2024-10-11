import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../types/jsx-custom-element';

export interface SpacingAttributes {
  size: string;
}

@customElement('docs-spacing')
export class DocsSpacing extends LitElement {
  @property({ reflect: true }) size: string = 'md';
  @property({ reflect: true }) direction: 'top' | 'bottom' = 'bottom';
  @property({ reflect: true }) alignment: 'center' | 'left' = 'center';

  static readonly styles = css`
    :host {
      display: block;
      color: var(--diamond-color-red-100);
      font-size: var(--diamond-font-size-xs);
      height: 0;
      position: relative;
    }

    :host([direction='top']) .docs-spacing__content {
      transform: translateY(-100%);
    }

    :host([alignment='left']) .docs-spacing__content {
      justify-content: flex-start;
      padding-left: var(--diamond-spacing-md);
    }

    .docs-spacing__content {
      align-items: center;
      display: flex;
      gap: var(--diamond-spacing-xs);
      height: var(--docs-spacing-height);
      justify-content: center;
      padding-left: var(--diamond-spacing-md);
    }

    .docs-spacing__border {
      border-bottom: 1px solid var(--diamond-color-red-100);
      border-top: 1px solid var(--diamond-color-red-100);
      height: 100%;
      position: relative;
      width: 7px;
    }

    .docs-spacing__border::before {
      background-color: var(--diamond-color-red-100);
      content: '';
      display: block;
      height: 100%;
      left: 50%;
      position: absolute;
      width: 1px;
    }

    .docs-spacing__text {
      max-width: 0;
      white-space: nowrap;
      width: 0;
    }
  `;

  render() {
    const { size } = this;

    return html`
      <style>
        :host {
          --docs-spacing-height: var(--diamond-spacing-${size});
        }
      </style>
      <div class="docs-spacing__content">
        <div class="docs-spacing__border"></div>
        <div class="docs-spacing__text">${size}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'docs-spacing': SpacingAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'docs-spacing': JSXCustomElement<SpacingAttributes>;
    }
  }
}
