import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators.js';
import { unsafeStatic, html } from 'lit/static-html.js';

@customElement('diamond-loading-text')
export class LoadingText extends LitElement {
  @property({ reflect: true }) as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'div'
    | 'span' = 'p';

  getTagName() {
    return this.as ?? 'p';
  }
  render() {
    const tag = this.getTagName() || 'p';
    return html`<${unsafeStatic(tag)}><slot></slot></${unsafeStatic(tag)}>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-loading-text': LoadingText;
  }
}
