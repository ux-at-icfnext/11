---
layout: layouts/right
title: Text Area
tags: forms
summary:


include: "{% include 'patterns/textarea/textarea.md' %}"

textarea-limited:
  label: What should Alice do next?
  hint-text: Keep it brief
  maxlength: 30

textarea:
  label: What should Alice say to the Queen of Hearts?


yaml-sample: |
  textarea:
    label: Form label
    hint-text: hint text # optional
    maxlength: # characters allowed - optional
---

For this form element, we've combined the character count and textarea of the USWDS into one pattern -- as they are all aspects of an text box that we would want to put into use.

## Design
**Simple Text Area**
{% include 'patterns/textarea/textarea.md' %}

---

**With character limit**
{% assign textarea = textarea-limited %}
{% include 'patterns/textarea/textarea.md' %}

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
