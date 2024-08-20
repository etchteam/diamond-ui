import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element';

export interface TokenTableAttributes {
  code: string;
}

@customElement('docs-token-table')
export class TokenTable extends LitElement {
  @property({ reflect: true }) code: string;

  static readonly styles = css`
    :host {
      display: block;
    }

    table {
      border: var(--diamond-border);
      border-collapse: collapse;
      margin-block: var(--diamond-spacing-lg);
      text-align: left;
      width: 100%;
    }

    th,
    td {
      border: var(--diamond-border);
      font-size: var(--diamond-font-size-sm);
      padding: var(--diamond-spacing-sm);
    }

    th {
      background-color: var(--diamond-color-grey-50);
    }

    code {
      background-color: var(--diamond-color-grey-50);
      border: var(--diamond-border);
      border-radius: var(--diamond-radius-sm);
      color: var(--diamond-color-grey-700);
      font-size: var(--diamond-font-size-sm);
      line-height: 1;
      padding: var(--diamond-spacing-xs) var(--diamond-spacing-sm);
      white-space: nowrap;
    }
  `;

  render() {
    const { code } = this;

    // Find all the tokens in the code
    const splitTokens = code.split(';');
    const parsedTokens = splitTokens
      .map((token) => /--diamond-([a-z]+)-([a-z-]+): (.+)/.exec(token))
      .filter(Boolean)
      .map((token) => ({
        group: token?.[1],
        name: token?.[2],
        value: token?.[3],
      }));

    return html`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Token</th>
            <th>Default value</th>
          </tr>
        </thead>
        <tbody>
          ${parsedTokens.map(
            (token) => html`
              <tr>
                <td>${token?.name}</td>
                <td><code>--diamond-${token?.group}-${token?.name}</code></td>
                <td>${token?.value}</td>
              </tr>
            `,
          )}
        </tbody>
      </table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'docs-token-table': TokenTableAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'docs-token-table': JSXCustomElement<TokenTableAttributes>;
    }
  }
}
