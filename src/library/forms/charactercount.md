---
layout: layouts/right
title: Character Count
tags: forms
summary:

include: "{% include 'patterns/charactercount/charactercount.md' %}"

charactercount:
  label: What should Alice do next?
  hint-text: Keep it brief
  maxlength: 30

yaml-sample: |

  charactercount:
    label: label title
    hint-text: text above the input field
    maxlength: 25 

---

{% include 'patterns/charactercount/charctercount.md' %}

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
