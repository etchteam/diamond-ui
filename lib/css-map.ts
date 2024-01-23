import { unsafeCSS } from 'lit';

export function cssMap(arr, callback) {
  return unsafeCSS(arr.map(callback).join('\n'));
}
