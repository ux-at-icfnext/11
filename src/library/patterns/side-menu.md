---
layout: layouts/right
title: Side Menu
tags: patterns
summary: Allows for showing the teriary menu in page -- best used for large screens and up.

date: 2024-08-30

include: "{% include 'patterns/sidenav/sidenav.md' %}"
---
## Design
See example on the right side of this page.

## Theme Settings
- $theme-sidenav-current-border-width 
- $theme-sidenav-font-family
- $theme-sidenav-reorder

## Nex+ Library prototyping notes
Ideally, use a layout to place your menu and your page content. For example:

```html
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-3"> [ side menu ] </div>
  <div class="tablet:grid-col-fill usa-prose">
    [ page content ]
  </div>
</div>
```

To use the preset side menu pattern, simply include this file. 
```markdown
{{ include }}
```
And use the `tags` property in the front matter of your pages to create subpages for example  `tags: patterns`. The menu will then create a list of all pages with that same tag as the sybling pages, and search for a parent with the title is the same as the tag. *note, this is a one level menu. The example is in the `/_includes/patterns/sidenav` folder and can be used as an example fore creating a custom sidenav for your prototype.