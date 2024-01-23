import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { cssMap } from '../../../lib/css-map';

const breakpoints = [
  { name: 'small-mobile', value: '0' },
  { name: 'mobile', value: '375px' },
  { name: 'large-mobile', value: '480px' },
  { name: 'small-tablet', value: '600px' },
  { name: 'tablet', value: '768px' },
  { name: 'large-tablet', value: '1024px' },
  { name: 'small-desktop', value: '1280px' },
  { name: 'desktop', value: '1440px' },
  { name: 'large-desktop', value: '1920px' },
];

const colWidth = (i: number) => (100 / 12) * (i + 1);

const columns = (breakpoint: string) => {
  return `
    :host([${breakpoint}="auto"]) { width: auto; }

    ${cssMap(
      [...Array(12).keys()],
      (i) => `
      :host([${breakpoint}="${i + 1}"]) { width: ${colWidth(i)}%; }
      `,
    )}
  `;
};

const columnBreakpoints = () => {
  return unsafeCSS(
    breakpoints
      .map(
        (bp) => `
        @media (min-width: ${bp.value}) {
          ${columns(bp.name)}
        }
      `,
      )
      .join(''),
  );
};

@customElement('diamond-grid-item')
export class GridItem extends LitElement {
  @property({ type: Boolean }) readonly grow?: boolean;
  @property({ type: Boolean }) readonly shrink?: boolean;

  @property() readonly smallMobile?: string;
  @property() readonly mobile?: string;
  @property() readonly largeMobile?: string;

  @property() readonly smallTablet?: string;
  @property() readonly tablet?: string;
  @property() readonly largeTablet?: string;

  @property() readonly smallDesktop?: string;
  @property() readonly desktop?: string;
  @property() readonly largeDesktop?: string;

  static styles = css`
    :host {
      display: block;
      flex: 0 0 auto;
      min-width: 0;
      padding: calc(var(--diamond-grid-gap) / 2);
    }

    :host([grow]) {
      flex-grow: 1;
    }

    :host([shrink]) {
      flex-shrink: 1;
    }

    :host[small-mobile='12'] {
      width: 100%;
    }

    ${columnBreakpoints()}
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'diamond-grid-item': GridItem;
  }
}
