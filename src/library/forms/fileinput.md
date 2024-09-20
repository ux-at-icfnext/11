---
layout: layouts/right
title: File Input
tags: forms
summary:

include: "{% include 'patterns/fileinput/fileinput.md' %}"

fileinput:
  label: Please upload your file
  hint: PDF or TXT files only # optional 

yaml-sample: |
  fileinput:
    label: Please upload your file
    hint: PDF or TXT files only # optional 
---

## Design

{% include 'patterns/fileinput/fileinput.md' %}



## Library Use
Make sure to inclose the full form between the `<form class="usa-form"> </form>` tags.

### Functionality
Please note for purposes of protyping, the form is limited to single upload and doesn't restrict to file type. Please see the options on the [USWDS](https://designsystem.digital.gov/components/file-input/) if you need to test that functionality.

**Front Matter**
``` yml
{{ yaml-sample }}
```

Include the pattern using this code:

``` markdown
 {{ include }}