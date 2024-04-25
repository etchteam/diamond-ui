import { css } from 'lit';

export const pulse = css`
  @keyframes pulse {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }

  :host {
    animation: pulse var(--diamond-transition-duration-pulse) infinite
      var(--diamond-transition-timing-pulse);
    appearance: none;
    background: linear-gradient(
      to right,
      color-mix(in srgb, var(--diamond-theme-color) 7.5%, transparent) 0%,
      color-mix(in srgb, var(--diamond-theme-background) 50%, transparent)
        33.33%,
      color-mix(in srgb, var(--diamond-theme-color) 7.5%, transparent) 100%
    );
    background-size: 200% 100%;
    color: transparent;
    display: inline-block;
    pointer-events: none;
    user-select: none;
  }
`;
