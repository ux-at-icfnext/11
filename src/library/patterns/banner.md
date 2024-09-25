---
layout: layouts/right
title: Banner
tags: patterns
summary: Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.

date: 2024-08-06
---

## Design
{% include 'patterns/banner/banner.md' %}

## Theme settings
- `$theme-banner-background-color` Background color of the banner and its content.
- `$theme-banner-font-family` The font family of the banner.
- `$theme-banner-link-color` The color of banner link. Add the link color and the system will generate the hover state. Default uses the default link settings calculated from your background color.
- `$theme-banner-max-width` Maximum width of the banner content.

## Library prototyping notes
The component is automatically included on any prototype page by setting `prototype:true` in the YAML front matter. 

To edit the component to match your project, edit the following file: `src/_includes/patterns/identifier/identifier.md`.

**If the site you are working on is not a .gov or .mil site, remove the banner from `src/_includes/layouts/base.html`**