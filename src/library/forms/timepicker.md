---
layout: layouts/right
title: Time Picker
tags: forms
summary:

include: "{% include 'patterns/timepicker/timepicker.md' %}"

timepicker:
  id: my-time
  label: What time is it?
  aria-label: my-time-label
  aria-describedby: my-time-hint

yaml-sample: |
  id: my-time
    label: My Time
    aria-label: my-time-label
    aria-describedby: my-time-hint
---

## Design
{% include "patterns/timepicker/timepicker.md" %}

### Date Range Picker
The USWDS shows both a [date picker](https://designsystem.digital.gov/components/date-picker/) and [date range picker](https://designsystem.digital.gov/components/date-range-picker/) as part of the design system. However, there isn't a difference between the two... the date range picker is created by simply using **two** date pickers.

## Properties
Please read further on the [USWDS](https://designsystem.digital.gov/components/date-picker/#using-the-date-picker-component-2) about the properties and requirements of this form element.

## Library Use
Make sure to inclose the full form between the `<form class="usa-form"> </form>` tags.


**Front Matter**
``` yml
{{ yaml-sample }}
```

Include the pattern using this code:

``` markdown
 {{ include }}
