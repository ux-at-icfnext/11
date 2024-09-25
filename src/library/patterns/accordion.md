---
layout: layouts/right
title: Accordion
tags: patterns
summary: An accordion is a list of headers that hide or reveal additional content when selected.

date: 2024-08-01

include: "{% include 'patterns/accordion/accordion.md' %}"
include2: |
  {% assign accordion = your-accordion-name %}
  {% include "patterns/accordion/accordion.md" %}


accordion:
  list:
    - title: Down, down, down.
      content: |
          Would the fall NEVER come to an end! ‘I wonder how many miles I’ve fallen by this time?’ she said aloud. ‘I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think--’ (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a VERY good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) ‘--yes, that’s about the right distance--but then I wonder what Latitude or Longitude I’ve got to?’ (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)
    - title: So she swallowed one of the cakes
      content: |
          ... and was delighted to find that she began shrinking directly. As soon as she was small enough to get through the door, she ran out of the house, and found quite a crowd of little animals and birds waiting outside. The poor little Lizard, Bill, was in the middle, being held up by two guinea-pigs, who were giving it something out of a bottle. They all made a rush at Alice the moment she appeared; but she ran off as hard as she could, and soon found herself safe in a thick wood.

accordion-sample:
  bordered: true
  multiselect: true
  alpha: b
  list:
    - title: The hedgehog was engaged
      content: |
        ... in a fight with another hedgehog, which seemed to Alice an excellent opportunity for croqueting one of them with the other: the only difficulty was, that her flamingo was gone across to the other side of the garden, where Alice could see it trying in a helpless sort of way to fly up into a tree
    - title: Luckily for Alice
      content: |
        ... the little magic bottle had now had its full effect, and she grew no larger: still it was very uncomfortable, and, as there seemed to be no sort of chance of her ever getting out of the room again, no wonder she felt unhappy
---

## Design
### Default Accordion

{% include "patterns/accordion/accordion.md" %}

### Example multi-select & bordered

{% assign accordion = accordion-sample %}
{% include "patterns/accordion/accordion.md" %}

## Theme Settings
These aspects can be set within the theme settings.
- `$theme-accordion-background-color` Background color of the accordion content.
- `$theme-accordion-border-width` Border width of the bordered accordion.
- `$theme-accordion-border-color` Border color of the bordered accordion.
- `$theme-accordion-button-background-color` Background color of the accordion button.
- `$theme-accordion-font-family` Font family of the accordion.

## Variations
- `.usa-accordion--bordered` Display a border around accordion content

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file. The component supports having multiple accordion groups on the page by adding the "alpha" property.

``` yml
accordion:
  bordered: true # Defaults to false, do not need to include unless you want the border
  multiselect: true # Defaults to false, do not need to include unless you want multi-select
  alpha: b # Defaults to a, do not need to include unless you have multiple accordions on one page
  list:
    - title: Accordion Label
      content: Accordion content
    - title: Accordion Label 2
      content: Accordion content 2
```

Include the pattern using this code:

``` markdown
 {{ include }}
```

If you need to change the name of your accordion group, especially for using multiple groups, you can reassign the accordion name.

``` markdown
 {{ include2 }}
```
