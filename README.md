<div align="center">
  <img src="src/images/logo.svg" />
  <h1>Diamond UI</h1>
  <p>
    Bring clarity to your components.
  </p>
</div>

<nav>
  <ul style="list-style-type: none">
    <li><a href="https://diamond.etch.co/" rel="noopener noreferrer">View Demo</a></li>
    <li><a href="link to storybook">Component Documentation</a></li>
    <li><a href="link to github issues">Report Bug</a></li>
    <li><a href="https://etch.co/">Etch site</a></li>
  </ul>
</nav>

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=etchteam_diamond-ui&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=etchteam_diamond-ui)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=etchteam_diamond-ui&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=etchteam_diamond-ui)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=etchteam_diamond-ui&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=etchteam_diamond-ui)

<br />

# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Project Background](#project-background)
    - [What is Diamond?](#what-is-diamond)
    - [What can Diamond do for me?](#what-can-diamond-do-for-me)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Basic Installation](#basic-installation)
    - [Advanced Installation](#advanced-installation)
  - [Usage](#usage)
    - [Tokens \& Themes](#tokens--themes)
  - [Contributing](#contributing)


## Project Background

As a bespoke software studio, Etch creates interfaces over a wide range of brands, timelines and technologies. After 20 years of trying different methodologies, from SMACSS, to OOCSS, to Bootstrap style, to Atomic Design, we’ve settled on our own organisational framework: Diamond UI.

### What is Diamond?

Diamond UI is a method of organising and grouping components to cleanly separate their responsibilities.

> A diamond’s quality is determined by the 4 Cs: cut, colour, clarity and carat.

Components are grouped into one of four areas, aiming to be concerned with fulfilling a single area of responsibility.

Diamond UI components are based around the 4 Cs of UI:

- *Composition*
- *Canvas*
- *Content*
- *Controls*


### What can Diamond do for me?

- Diamond UI components are small and easy to understand.
- With clear boundaries between them, it’s immediately obvious when a component is trying to overstep its area of responsibility and become a later piece of tech debt.
- With minimal onboarding, most developers can quickly understand where to find each type of component.
- Diamond components are less prone to prop bloat, by scoping to a single area of responsibility. They automatically favour composition over inheritance.
- With fewer output variations, Diamond components are easier to test.
- Diamond components have simple interfaces and less complicated props to understand.
- Diamond solves future problems, by being extremely flexible. Components can be constructed in thousands of combinations to suit the context.
- Diamond components retain human legibility when compared to a utility-first framework, whilst staying almost as flexible.

## Getting Started
### Prerequisites
None, Diamond UI uses web components or CSS classes.

### Basic Installation
Getting Diamond up and running in a new or existing project can be as simple as including the import for components that don't have any internal javascript.

**styles.css**

``` @import 'npm:@etchteam/diamond-ui/diamond-ui.css'; ```

Depending on your specific project setup and strucutre. Then you're ready to use Diamond components.

```
    <p class="diamond-text-font-heading diamond-text-size-h1 diamond-text-align-left diamond-text-wrap-pretty">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
    </p>
```
[Codepen example](https://codepen.io/carls-playground/pen/MWRMYyj)
### Advanced Installation
Different frameworks may have different expected directory and folder structures for importing stylesheets, please refer to your specific frameworks documentation.

## Usage
### Tokens & Themes

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#222831](https://via.placeholder.com/10/222831?text=+) #222831 |
| Secondary Color | ![#393E46](https://via.placeholder.com/10/393E46?text=+) #393E46 |
| Accent Color | ![#00ADB5](https://via.placeholder.com/10/00ADB5?text=+) #00ADB5 |
| Text Color | ![#EEEEEE](https://via.placeholder.com/10/EEEEEE?text=+) #EEEEEE |

## Contributing

<a href="https://github.com/etchteam/diamond-ui/blob/main/CONTRIBUTING.md">Contributing</a>





