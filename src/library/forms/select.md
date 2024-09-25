---
layout: layouts/right
title: Select
tags: forms
summary:


include: "{% include 'patterns/select/select.md' %}"

select:
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
  select:
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
{% include 'patterns/select/select.md' %}


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
