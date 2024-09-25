---
layout: layouts/right
title: Site Alert
tags: patterns
summary: A site alert communicates urgent sitewide information.

date: 2024-09-02

include: "{% include 'patterns/sitealert/sitealert.md' %}"

alert:
    type: info
    title: Short alert message
    content: Additional context and followup information including <a class="usa-link" href="#">a link</a>

alert-emergency:
    type: emergency
    title: Short alert message
    content: Additional context and followup information including <a class="usa-link" href="#">a link</a>

alert-slim:
    type: info
    slim: true
    content: Additional context and followup information including <a class="usa-link" href="#">a link</a>

alert-icon:
    type: emergency
    slim: true
    icon: none
    content: Additional context and followup information including <a class="usa-link" href="#">a link</a>

---

## Design
### Default alert
{% include "patterns/sitealert/sitealert.md" %}

### Emergency alert
{% assign alert = alert-emergency %}
{% include "patterns/sitealert/sitealert.md" %}

### Slim alert (no title)
{% assign alert = alert-slim %}
{% include "patterns/sitealert/sitealert.md" %}

### No icon alert
{% assign alert = alert-icon %}
{% include "patterns/sitealert/sitealert.md" %}

## ARIA roles
- `role="alert"`: Important messages that demand the user's immediate attention. Use this role sparingly because it interrupts the user's workflow.
- `role="status"`: Messages that provide advisory information but do not have the same urgency as alerts.

## Theme Settings
- `$theme-site-alert-max-width`: Maximum width of the site alert content.

## Variations
- `.usa-site-alert--info`: Displays an information site alert.
- `.usa-site-alert--emergency`: Displays an emergency site alert.
- `.usa-site-alert--slim`: Display a slimmer version of the site alert.
- `.usa-site-alert--no-icon`: Display an site alert without an icon

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file. 

``` yml
alert:
  type: info # options info | emergency
  slim: true # Defaults to false, do not need to include unless you want the slim alert
  icon: no # Defaults to true, do not need to include unless you want the icon
  title: Short alert message # optional
  content: Additional context and followup information including <a class="usa-link" href="#">a link</a>
```

Include the pattern using this code:

``` markdown
 {{ include }}
```
