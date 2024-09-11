---
layout: layouts/right
title: Tags
tags: patterns
summary:

include: "{% include 'patterns/tag/tag.md' %}"

tag:
  - text: INFO
  - text: DOCS

tag-big:
  - text: BIG
    big: true # defaults to false
---

## Design
### Default 
{% include 'patterns/tag/tag.md' %}

### Big Tag
{% assign tag = tag-big %}
{% include 'patterns/tag/tag.md' %}

## Variations
- `.usa-tag--big`:A tag with increased padding and font size.

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

``` yml
  tag:
    - text: INFO
      big: # defaults to false, set to true to use
```
**IMPORTANT**: 11ty uses "tags" as a global property in the YAML from matter. In order to avoid conflicts, use "tag" ... not "s"... when adding this to the front matter.

Include the pattern using this code:

``` markdown
 {{ include }}
```
