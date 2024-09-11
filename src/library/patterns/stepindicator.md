---
layout: layouts/right
title: Step Indicator
tags: patterns
summary:

include: "{% include 'patterns/stepindicator/stepindicator.md' %}"


step:
  number: 3
  total: 5
  title: Supporting documents
  labels: # options none. defaults to true, you do not need to use for default state.
  centered: # option true. defaults to false, you do not need to use for default state.
  counters: # option true. defaults to false, you do not need to use for default state.
  small: true # option true. defaults to false, you do not need to use for default state.
  list:
    - content: completed step
      status: complete
    - content: in progress step
    - content: next steps
      status: todo

step-label:
  number: 3
  total: 5
  title: Supporting documents
  labels: none # options none. defaults to true, you do not need to use for default state.
  centered: # option true. defaults to false, you do not need to use for default state.
  counters: # option true. defaults to false, you do not need to use for default state.
  small:  # option true. defaults to false, you do not need to use for default state.
  list:
    - content: completed step
      status: complete
    - content: in progress step
    - content: next steps
      status: todo

step-centered:
  number: 3
  total: 5
  title: Supporting documents
  labels: # options none. defaults to true, you do not need to use for default state.
  centered: true # option true. defaults to false, you do not need to use for default state.
  counters: # option true. defaults to false, you do not need to use for default state.
  small: # option true. defaults to false, you do not need to use for default state.
  list:
    - content: completed step
      status: complete
    - content: in progress step
    - content: next steps
      status: todo

step-counters:
  number: 3
  total: 5
  title: Supporting documents
  labels: # options none. defaults to true, you do not need to use for default state.
  centered: # option true. defaults to false, you do not need to use for default state.
  counters: true# option true. defaults to false, you do not need to use for default state.
  small: # option true. defaults to false, you do not need to use for default state.
  list:
    - content: completed step
      status: complete
    - content: in progress step
    - content: next steps
      status: todo
      
step-small:
  number: 3
  total: 5
  title: Supporting documents
  labels: # options none. defaults to true, you do not need to use for default state.
  centered: # option true. defaults to false, you do not need to use for default state.
  counters: # option true. defaults to false, you do not need to use for default state.
  small: true # option true. defaults to false, you do not need to use for default state.
  list:
    - content: completed step
      status: complete
    - content: in progress step
    - content: next steps
      status: todo
---

## Design
### Default 
{% include "patterns/stepindicator/stepindicator.md" %}

---

### Centered labels
{% assign step = step-centered %}
{% include "patterns/stepindicator/stepindicator.md" %}

---

### No labels
{% assign step = step-label %}
{% include "patterns/stepindicator/stepindicator.md" %}

---

### Counters
{% assign step = step-counters %}
{% include "patterns/stepindicator/stepindicator.md" %}

---

### Small counters
{% assign step = step-small %}
{% include "patterns/stepindicator/stepindicator.md" %}

## Theme Settings
These aspects can be set within the theme settings.

- `$step-indicator-background-color `:Background color of the component and the gaps around the counters.
- `$theme-step-indicator-counter-gap `: Gap between the counter and the segment.
- `$theme-step-indicator-counter-border-width `: Size of the border around the pending steps.
- `$theme-step-indicator-font-family `: Font family of the labels and counter numbers.
- `$theme-step-indicator-heading-font-family `: Font family of the heading.
- `$theme-step-indicator-heading-color `:Color of the heading.
- `$theme-step-indicator-heading-font-size `:Font size of the heading on screens of **$theme-step-indicator-min-width** and larger.
- `$theme-step-indicator-heading-font-size-small `:Font size of the heading on screens smaller than **$theme-step-indicator-min-width**.
- `$theme-step-indicator-label-font-size `:Font size of segment labels.
- `$theme-step-indicator-min-width `:Width at which the component displays large-width features.
- `$theme-step-indicator-segment-color-pending `:Color of pending step segments. Use a grade of 40 more than **$step-indicator-background-color**.
- `$theme-step-indicator-segment-color-complete `: Color of complete step segments. Use a grade of at least 60.
-` $theme-step-indicator-segment-color-current `: Color of the current step segments. Use a grade at least 20 less than **$theme-step-indicator-segment-color-complete**.
- `$theme-step-indicator-segment-gap `: Gap between step segments.
- `$theme-step-indicator-segment-height `: Height of the step segment. Note that the mobile segment height is always 1 unit.
- `$theme-step-indicator-text-pending-color `: The text color of pending steps. Use a gray grade of 60 more than the **$step-indicator-background-color**.

## Variants
- `.usa-step-indicator--no-labels`: Don’t show step labels.
- `.usa-step-indicator--counters`: Show step counters.
- `.usa-step-indicator--counters-sm`: Show small step counters
- `.usa-step-indicator--center`: Center counters and labels in each step

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

``` yml
step:
  number: 3
  total: 5
  title: Supporting documents
  labels: # options none. defaults to true, you do not need to use for default state.
  centered: # option true. defaults to false, you do not need to use for default state.
  counters: # option true. defaults to false, you do not need to use for default state.
  small: true # option true. defaults to false, you do not need to use for default state.
  list:
    - content: completed step
      status: complete # option complete | todo. Do not use for in-process
    - content: in progress step
    - content: next steps
      status: todo
```

Include the pattern using this code:

``` markdown
 {{ include }}
```
