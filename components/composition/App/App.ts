import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface AppAttributes {
  header?: 'sticky';
}

@customElement('dmd-app')
export class App extends LitElement {
  @property({ reflect: true }) header?: 'sticky';

  render() {
    return html`
      <div part="header">
        <slot name="header"></slot>
      </div>
      <div part="main">
        <slot></slot>
      </div>
      <div part="footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-app': AppAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-app': JSXCustomElement<AppAttributes>;
    }
  }
}
