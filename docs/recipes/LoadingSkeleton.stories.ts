import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './LoadingPage';
import '../../components/content/LoadingImg/LoadingImg';
import '../../components/content/LoadingText/LoadingText';
import '../../components/content/LoadingButton/LoadingButton';
import '../../components/composition/Enter/Enter';

export default {
  title: 'Recipes/Loading Skeleton',
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoadingSkeleton: StoryObj = {
  render: () => html`<docs-loading-page></docs-loading-page>`,
};
