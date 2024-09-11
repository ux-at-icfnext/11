---
layout: layouts/right
title: Summary box
tags: patterns
summary:

include: "{% include 'patterns/summarybox/summarybox.md' %}"

summarybox:
  title: This seemed to Alice a good opportunity
  text: ‘You!’ said the Caterpillar contemptuously. ‘Who are YOU?’
  list:
    - item: for making her escape
    - item: so she set off at once
    - item: and ran till she was quite tired
    - item: and out of breath
    - item: and till the puppy’s bark](#) sounded quite faint in the distance.
---

## Design
{% include 'patterns/summarybox/summarybox.md' %}

## Theme Settings
These aspects can be set within the theme settings.
- `$theme-summary-box-background-color `: Background color of the Summary box.
- `$theme-summary-box-border-color `: Color the border around the Summary box.
- `$theme-summary-box-border-width `: Width of the border around the Summary box.
- `$theme-summary-box-border-radius `: Border radius of the summary box.
- `$theme-summary-box-font-family `: Font family of the content text.
- `$theme-summary-box-link-color `: Color of the links inside the content text. When set to “default”, links will get one of three values, based on contrast: **$theme-link-color**, **$theme-link-reverse-color**, or “ink”.
- `$theme-summary-box-text-color `: Color of the content text. When set to “default”, text will get one of two values, based on contrast: **$theme-text-reverse-color** or **$theme-text-color**

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

``` yml
summarybox:
  title: Title for box
  text: text included in box 
  list:
    - item: item 1
    - item: item 1
    - item: item 1
    - item: item 1
    - item: item 1
```
_note: you can use either or both text on list, but you must have at least 1_

Include the pattern using this code:

``` markdown
 {{ include }}
```

