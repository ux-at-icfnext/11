---
layout: layouts/right
title: Footer
tags: patterns
summary: A footer serves site visitors who arrive at the bottom of a page without finding what they want.

date: 2024-08-14
---

## Design 
### Slim Footer
{% include 'patterns/footer/footer-slim.md' %}

### Medium Footer
{% include 'patterns/footer/footer.md' %}

### Big Footer
{% include 'patterns/footer/footer-big.md' %}



## Theme Settings
- $theme-footer-font-family - Font family of the footer.
- $theme-footer-max-width - Maximum width of footer container.

For this library we've set the `$theme-footer-max-width` to "widescreen", to fit with our [Grid](/library/styles/grid) strategy.

All other aspects to brand the footer will have to be overwritten using CSS.

## Nex+ Library prototyping notes
The library and prototype use the same footer which is set in the `_layouts/default.html` file. At default it's using the regular jekyll partial footer, this can be updated to use the extended header by changing `footer.md` or `footer-small` or `footer-ext.md`.

The navigation for the library is in `_data/lib-nav.yml` and for the prototype in `_data/nav.yml`. Settings for the logo and site name are in the `_data/settings.yml` file.