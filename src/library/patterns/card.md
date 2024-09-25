---
layout: layouts/right
title: Card
tags: patterns
summary: Cards contain content and actions about a single subject.

date: 2024-08-10

include: "{% include 'patterns/card/card.md' %}"

card:
  tablet: 6
  widescreen: 6
  list:
    - title: Alice in Wonderland
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      button:
        - link: "#"
          label: "Drink me"
    - title: Alice in Wonderland
      img: card-image-sample.png
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      button:
        - link: "#"
          label: "Drink me"
    - title: Alice in Wonderland
      img: card-image-sample.png
      inset: true
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      button:
        - link: "#"
          label: "Drink me"
    - title: Alice in Wonderland
      img: card-image-sample.png
      header-first: true
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      button:
        - link: "#"
          label: "Drink me"
        - link: "#"
          label: "Eat me"
card-flags:
  tablet: 12
  widescreen: 12
  list:
    - title: Alice in Wonderland
      img: card-image-sample.png
      left: true
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      button:
        - link: "#"
          label: "Drink me"
    - title: Alice in Wonderland
      right: true
      img: card-image-sample.png
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures. 
---


## Design
{% include 'patterns/card/card.md' %}

{% assign card = card-flags %}
{% include 'patterns/card/card.md' %}

## Theme Settings
- `$theme-card-border-color` Stroke color of card.
- `$theme-card-border-radius` Border radius of card.
- `$theme-card-border-width` Stroke thickness of card.
- `$theme-card-gap` Gap between cards in a card group.
- `$theme-card-flag-min-width` Width at which flag cards change to horizontal layout.
- `$theme-card-flag-image-width` Fixed image width in the card flag variant.
- `$theme-card-font-family` Font family for card body.
- `$theme-card-header-typeset` Family, size, and line height of the heading.
- `$theme-card-margin-bottom` Bottom margin for card.
- `$theme-card-padding-perimeter` Padding between card elements and card border.
- `$theme-card-padding-y` Vertical padding between card elements.

## Variations
- `.usa-card--flag` Display in a horizontal (“flag”) orientation at a specified width (`$theme-card-flag-min-width`).
- `.usa-card--header-first` Displays the header element before the media element.
- `.usa-card--media-right` In combination with usa-card--flag, sets the media element on the right. (Flag cards display media on the left by default.)
- `.usa-card__media--inset` Indents the media element so it doesn’t extend to the edge of the card.
- `.usa-card__body--exdent` Extends the body element out over the card border. Useful for light-bordered cards.
- `.usa-card__footer--exdent` Extends the footer element out over the card border. Useful for light-bordered cards.
- `.usa-card__header--exdent` Extends the header element out over the card border. Useful for light-bordered cards.
- `.usa-card__media--exdent` Extends the media element out over the card border. Useful for light-bordered cards.

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file. 

### Responsive Settings
You can set responsive grid sizes by adding grids to the card settings. The grid follows the 12 column strategy of the USWDS. For example: if you want your columns to be 50/50 set your grid number to 6 (see example below):
- **grid**: smallest ≥ 0px
- **mobile**: ≥ 480px
- **tablet**: ≥ 640px
- **desktop**: ≥ 1024px
- **widescreen**: < 1025px

### Card Settings
_these go within the `list` property of the card yml._
- **title** - required
- **body** - text only / optional
- **img** - optional, link to image file
- **inset** - optional, set to "true"
- **header-first** - optional, moves header above the image, set to "true"
- **button** optional, list contains label and link. Can house multiple buttons.

```yml
card:
  tablet: 6 
  widescreen: 6
  list:
    - title: Alice in Wonderland
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      button:
        - link: "#"
          label: "Drink me"
```

Include the pattern using this code:

```markdown
 {{ include }}
```