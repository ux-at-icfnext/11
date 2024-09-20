---
layout: layouts/right
title: Combo Box
tags: forms
summary:

include: "{% include 'patterns/combobox/combobox.md' %}"

combobox:
  name: fruit
  label: Select a fruit
  list:
    - value: Select a fruit
      selected: true
    - value: Apple
    - value: Apricot
    - value: Avocado
    - value: Banana

yaml-sample: |
  combobox:
    name: fruit
    label: Select a fruit
    list:
      - value: Select a fruit
        selected: true
      - value: Apple
      - value: Apricot
      - value: Avocado
      - value: Banana
---

## Design
{% include "patterns/combobox/combobox.md" %}

## Properties
Please read further on the [USWDS](https://designsystem.digital.gov/components/combo-box/#using-the-combo-box-component-2) about the properties and requirements of this form element.

## Library Use
Make sure to inclose the full form between the `<form class="usa-form"> </form>` tags.


**Front Matter**
``` yml
{{ yaml-sample }}
```


Include the pattern using this code:

``` markdown
 {{ include }}
```


