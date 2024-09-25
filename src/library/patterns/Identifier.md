---
layout: layouts/right
title: Identifier
tags: patterns
summary: The identifier communicates a site’s parent agency and displays agency links required by federal laws and policies.

date: 2024-08-18
---

## Design
{% include 'patterns/identifier/identifier.md' %}

## Theme Settings
- `$theme-identifier-background-color` The background color of the identifier. Use a color of grade 80 or higher, darker than the section that precedes it.
- `$theme-identifier-font-family` The font family of the identifier.
- `$theme-identifier-identity-domain-color` The color of your domain text in the identifier masthead. This should be grade 20-30 in the same family as the `$theme-identifier-background-color`.
- `$theme-identifier-max-width` The maximum width of the content within the identifier. Use the same max-width as your site footer.
- `$theme-identifier-primary-link-color` The color of the links in the masthead section. Default uses either the standard or reverse link color set with `$theme-link-color` and `$theme-link-reverse-color`.
- `$theme-identifier-secondary-link-color` The color of the links in the required links section. This should be **grade 20-30** in a gray family.

## Library prototyping notes
The component is automatically included on any prototype page by setting `prototype:true` in the YAML front matter.

To edit the component to match your project, edit the following file: `/_includes/patterns/identifier/identifier.md`.

**If the site you are working on is not a .gov or .mil site, remove the identifier from `src/_includes/layouts/base.html`**