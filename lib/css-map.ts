import { unsafeCSS } from 'lit';

export function cssMap(arr: any[], callback: (element: any) => string) {
  return unsafeCSS(arr.map(callback).join('\n'));
}
