import { unsafeCSS } from 'lit';

export function cssMap(arr: any[], callback: (any) => string) {
  return unsafeCSS(arr.map(callback).join('\n'));
}
