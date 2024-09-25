---
layout: layouts/right
title: Collection
tags: patterns
summary: A collection displays a compact list of multiple related items like articles or events. The list links each item to its original source.

date: 2024-08-12

include: "{% include 'patterns/collection/collection.md' %}"

collection:
  list:
    - title: Alice in Wonderland
      link: "#"
      meta:
        - source: wonderland.com
  
collection-default:
  list:
    - title: Alice in Wonderland
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      link: "#"
      meta:
        - author: Lewis Carrol
          date: November 1865
      tags:
        - title: Fiction
          highlight: true
        - title:  Classics
        - title:  Children's

collection-img:
  list:
    - title: Alice in Wonderland
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      link: "#"
      img: card-image-sample.png
      date:
        - time: "2020-09-30T12:00:00+01:00"
          month: SEP
          day: "30"
      meta:
        - author: Lewis Carrol
          date: November 1865
      tags:
        - title: Fiction
          highlight: true
        - title:  Classics
        - title:  Children's

collection-date:
  list:
    - title: Alice in Wonderland
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      link: "#"
      date:
        - time: "2020-09-30T12:00:00+01:00"
          month: SEP
          day: "30"
      meta:
        - author: Lewis Carrol
          date: November 1865
      tags:
        - title: Fiction
          highlight: true
        - title:  Classics
        - title:  Children's
---

## Design

### Header only
{% include "patterns/collection/collection.md" %}

### Default
{% assign collection = collection-default %}
{% include "patterns/collection/collection.md" %}

### Media Thumbnail
{% assign collection = collection-img %}
{% include "patterns/collection/collection.md" %}

### Calendar
{% assign collection = collection-date %}
{% include "patterns/collection/collection.md" %}

## Theme Settings
- `$theme-collection-font-family` Font family for collection body.
- `$theme-collection-header-typeset` Family, size, and line height of the heading.

## Variations
- `.usa-collection--condensed` A more condensed item presentation with less space between items.
- 
## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

### Settings
- condensed | default is false - no need to include if not wanted
  
### Collection Settings
these go within the `list` property of the card yml.
- **title**: required
- **body**: text only / optional
- **img**: optional, image file name
- **link**: required
- **date**: for calendar thumbnail / optional
  - time: UTC format (ex: 2020-09-30T12:00:00+01:00)
  - month: 3 letter (ex: SEP )
  - day: 2 digit max (ex: 24)
- **meta**: optional 
  - author
  - date _only used with author_
  - source 
- **tags**: list / optional

```yaml
collection-default:
  condensed: true
  list:
    - title: Alice in Wonderland
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      link: "#"
      meta:
        - author: Lewis Carrol
          date: November 1865
      tags:
        - title: Fiction
          highlight: true
        - title:  Classics
        - title:  Children's
```

Include the pattern using this code:

```markdown
 {{ include }}
```
