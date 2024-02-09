import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

@customElement('diamond-app')
export class App extends LitElement {
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
    'diamond-app': App;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-app': App & JSXCustomElement;
    }
  }
}
