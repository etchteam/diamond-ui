import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface EnterAttributes {
  type?: 'fade' | 'fade-in-up' | 'boing';
  enterOnScroll?: boolean;
  delay?: string | number;
  /**
   * Applies display grid so that children fill the height and width of the component
   */
  fill?: boolean;
}

@customElement('diamond-enter')
export class Enter extends LitElement {
  observer?: IntersectionObserver;
  @state() inView: boolean = false;
  @property({ reflect: true }) type?: 'fade' | 'fade-in-up' | 'boing';
  @property({ reflect: true, attribute: 'enter-on-scroll' })
  enterOnScroll?: string | boolean;
  @property({ reflect: true }) delay?: string | number;
  @property({ reflect: true, type: Boolean }) fill: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.enterOnScroll) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.inView = true;
              this.observer?.unobserve(this);
            }
          });
        },
        { threshold: 0 },
      );
      this.observer.observe(this);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.observer?.disconnect();
  }

  render() {
    const type = this.inView || !this.enterOnScroll ? this.type : '';

    return html`
      <style>
        :host {
          --diamond-transition-enter-delay: ${this.delay}s;
          --diamond-transition-enter-animation: ${type};
        }
      </style>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-enter': EnterAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'diamond-enter': EnterAttributes & JSXCustomElement;
    }
  }
}
