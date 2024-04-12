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
`;
