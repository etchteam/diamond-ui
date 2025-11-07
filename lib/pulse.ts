import { css } from 'lit';

export const pulse = css`
  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }

  :host {
    animation:
      fade-in var(--dmd-transition-duration-enter) forwards
        var(--dmd-transition-timing-enter) var(--dmd-loading-delay),
      pulse var(--dmd-transition-duration-pulse) infinite
        var(--dmd-transition-timing-pulse);
    appearance: none;
    background: linear-gradient(
      to right,
      color-mix(in srgb, var(--dmd-theme-color) 7.5%, transparent) 0%,
      color-mix(in srgb, var(--dmd-theme-background) 50%, transparent) 33.33%,
      color-mix(in srgb, var(--dmd-theme-color) 7.5%, transparent) 100%
    );
    background-size: 200% 100%;
    color: transparent;
    display: inline-block;
    opacity: 0;
    pointer-events: none;
    user-select: none;
  }
`;
