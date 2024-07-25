import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

import logo from './logo.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Diamond UI',
    brandUrl: 'https://diamond.etch.co',
    brandImage: logo,
  })
});
