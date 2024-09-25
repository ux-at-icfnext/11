---
layout: layouts/right
title: Search Widget
tags: patterns
summary: Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation

date: 2024-08-28

include: "{% include 'patterns/search/search.md' %}"
search:
  label: Search
  button:  default 
  placeholder: Search collections

search-small:
  label: Search
  button:  small
search-big:
  label: Search
  button:  big 
  placeholder: Search collections 

---


## Design
Default search
{% include 'patterns/search/search.md' %}

Search small
{% assign search = search-small %}
{% include 'patterns/search/search.md' %}

Search big
{% assign search = search-big %}
{% include 'patterns/search/search.md' %}

## Theme Settings
These aspects of the search can be set within the theme settings.

- $theme-search-font-family - _default: ui_
- $theme-search-min-width - _27ch_


All other aspects of the search will have to be overwritten by the CSS. For instance color:
- The color of the button is using the 'primary' color as is set up [buttons](/styles/buttons).
- The easiest way to change the button is to add the button class for the additional button styles. So `class="usa-button"` becomes `class="usa-button usa-button--secondary"`

## Specifications

| field name | field type | content rules |
| ------ | ------ | ------ |
| label | text | 50 characters |
| button | button | options default, small, big |
| class | button | changes the button color eg: usa-button--secondary |
| placeholder | text |  |


## Nex+ Library prototyping notes
By default, the search widget is set to use the small maginifing class for the button and uses "Search" as the label (not displayed). To change any of these defaults use the the following variables in the page front matter. Leave items of that you don't want to change. For example:

```yaml
search:
  label: Search
  button:  big
  placeholder: Search collections
  class: usa-button--secondary
```

Then include the widget where you want it:

```markdown
{{ include }}
```