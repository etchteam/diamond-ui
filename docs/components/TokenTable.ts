import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '../../types/jsx-custom-element';

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
      white-space: normal;
    }

    .token-table-thumbnail {
      background: var(--token-table-thumbnail-background);
      display: inline-block;
      height: 1em;
      vertical-align: middle;
      width: 1em;
    }
  `;

  render() {
    const { code } = this;

    // Find all the CSS contained in a :root or :backdrop selector
    const tokenBlocks = code.match(/:(?:root|backdrop) {([^}]+)}/g);

    console.log(tokenBlocks);

    // Find all the tokens in the code
    const parsedTokens = tokenBlocks
      ?.map((block) => block.split(';'))
      .flat()
      .map((token) => /--diamond-([a-z]+)-?([a-z-]*): ([^;]+)/.exec(token))
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
                <td>${token?.name || token?.group}</td>
                <td>
                  <code
                    >--diamond-${token?.group}${token?.name
                      ? `-${token?.name}`
                      : ''}</code
                  >
                </td>
                <td>
                  <code>${token?.value?.replace(/(\(\s|\s\))/g, '')}</code>
                  <span
                    class="token-table-thumbnail"
                    style="--token-table-thumbnail-background: ${token?.value?.replace(
                      /(\(\s|\s\))/g,
                      '',
                    )};"
                  ></span>
                </td>
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
