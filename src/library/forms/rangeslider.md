---
layout: layouts/right
title: Range Slider
tags: forms
summary: A range slider allows users to choose an approximate number from a range.

include: "{% include 'patterns/rangeslider/rangeslider.md' %}"

range:
  label: How many mushrooms should Alice Eat?
  value: 15 # where do you want the slider to be

yaml-sample: |
  range:
    label: How many mushrooms should Alice Eat?
    value: 15 # where do you want the slider to be
---

## Design 

{% include 'patterns/rangeslider/rangeslider.md' %}

## Library Use
Make sure to inclose the full form between the `<form class="usa-form"> </form>` tags.


**Front Matter**
``` yml
{{ yaml-sample }}
```

Include the pattern using this code:

``` markdown
 {{ include }}

