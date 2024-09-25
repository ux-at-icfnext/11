---
layout: layouts/right
title: Alert
tags: patterns
summary: An alert keeps users informed of important and sometimes time-sensitive changes.

date: 2024-08-04

include: "{% include 'patterns/alert/alert.md' %}"

alert:
  type: usa-alert--info
  heading: Information
  body: |
    Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit, sed do eiusmod.
alert-warning:
  type: usa-alert--warning
  heading: Warning
  body: |
    Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit, sed do eiusmod.
alert-success:
  type: usa-alert--success
  heading: Success
  body: |
    Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit, sed do eiusmod.
alert-error:
  type: usa-alert--error
  heading: Error
  body: |
    Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit, sed do eiusmod.

alert-emergency:
  type: usa-alert--emergency
  heading: Emergency
  body: |
    Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit, sed do eiusmod.

alert-noicon:
  type: usa-alert--info
  no-icon: true
  body: |
    Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit, sed do eiusmod.
---

## Design
{% include 'patterns/alert/alert.md' %}

{% assign alert = alert-warning %}
{% include 'patterns/alert/alert.md' %}

{% assign alert = alert-success %}
{% include 'patterns/alert/alert.md' %}

{% assign alert = alert-error %}
{% include 'patterns/alert/alert.md' %}

{% assign alert = alert-emergency %}
{% include 'patterns/alert/alert.md' %}

Example with no header or icon
{% assign alert = alert-noicon %}
{% include 'patterns/alert/alert.md' %}

## Theme Settings
- `$theme-alert-bar-width` Width of the colored bar to the left of the alert.
- `$theme-alert-font-family` Font family of the alert.
- `$theme-alert-icon-size` Size of the alert icon.
- `$theme-alert-padding-x` Padding on the left and right of the alert.
- `$theme-alert-padding-y` Padding on the top and bottom of the alert.
- `$theme-alert-text-color` Text color on light backgrounds. Default uses text color set in `$theme-text-color`.
- `$theme-alert-link-color` Link color on light backgrounds. Default uses text color set in `$theme-text-color`.
- `$theme-alert-text-reverse-color` Text color on dark backgrounds. Default uses reverse text color set in `$theme-text-reverse-color`.
- `$theme-alert-link-reverse-color` Link color on dark backgrounds. Default uses reverse link color set in `$theme-link-reverse-color`.

## Variations
- `.usa-alert--emergency` Display an emergency status alert.
- `.usa-alert--error` Display an error status alert.
- `.usa-alert--info` Display an informational status alert.
- `.usa-alert--no-icon` Display an alert without an icon.
- `.usa-alert--slim` Display a slimmer version of the alert.
- `.usa-alert--success` Display an success status alert.
- `.usa-alert--warning` Display an warning status alert.

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file. 

```yml
  alert:
    type: usa-alert--info
    no-icon: true # defaults to false, no need to include when using an icon
    heading: Information
    body: |
      Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit, sed do eiusmod.
```
Include the pattern using this code:

```markdown
 {{ include }}
```
