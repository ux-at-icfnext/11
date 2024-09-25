---
layout: layouts/right
title: Input Mask
tags: unpublish
summary:

include: "{% include 'patterns/inputmask/inputmask.md' %}"

mask:
  label: My Cool Masked field
  type: phone #Options  phone | zip | soc | alpha

mask-soc:
  label: My Cool Masked field
  type: soc #Options  phone | zip | soc 
mask-zip:
  label: My Cool Masked field
  type: zip #Options  phone | zip | soc 

mask-alpha:
  label: My Cool Masked field
  type: alpha #Options  phone | zip | soc 

yaml-sample: |
  mask:
    label: My Cool Masked field
    type: phone #Options  phone | zip | soc | alpha
---

## Design

**Phone**
{% include 'patterns/inputmask/inputmask.md' %}

**Zip**
{% assign mask = mask-zip %}
{% include 'patterns/inputmask/inputmask.md' %}

**Phone**
{% assign mask = mask-soc %}
{% include 'patterns/inputmask/inputmask.md' %}

**Alpha**
{% assign mask = mask-alpha %}
{% include 'patterns/inputmask/inputmask.md' %}

## Library Use
Make sure to inclose the full form between the `<form class="usa-form"> </form>` tags.


**Front Matter**
``` yml
{{ yaml-sample }}
```

Include the pattern using this code:

``` markdown
 {{ include }}