# Diamond UI

Diamond UI is a collection of design tokens, CSS, web components and [CSS web components](https://etch.co/blog/css-web-components) that can be used to scaffold out web projects.

The components are built using the methodology from the [Diamond UI docs](https://diamond/etch.co). They are extremely light weight, using very little JavaScript or external dependencies. The components and CSS should be installable in any project or framework.

## Install

Install the package from npm.

```shell
npm i @etchteam/diamond-ui --save
```

Include the base CSS, either in JS or SCSS/CSS or HTML

```scss
@import '~@etchteam/diamond-ui/diamond-ui.css';
```

Components can be imported by importing the file, which will also give type completion.

```js
import '@etchteam/diamond-ui/composition/Grid/Grid';
```

And then used in HTML (or React, Vue, Angular, etc)

```html
<dmd-grid>
  <dmd-grid-item>
    Grid content
  </dmd-grid-item>
</dmd-grid>
```

## Configure

Diamond comes with smart defaults for tokens, but these can all be overwritten by creating your own
set of CSS tokens applied to `:root`. All the tokens are listed in the [token docs](https://diamond.etch.co/components?path=/docs/foundations-tokens-border--docs)

Diamond supports custom theming, but in the interests of needing to override the least amount of base config, no production-ready themes are available out of the box. Full docs on creating themes which can be applied to components are available in the [theme docs](https://diamond.etch.co/components?path=/docs/docs-theming--docs).
