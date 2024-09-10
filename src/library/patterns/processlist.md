---
layout: layouts/right
title: Process List
tags: patterns
summary:

include: "{% include 'patterns/processlist/processlist.md' %}"

processlist:
  - title: Down, down, down.
    content: |
      - Would the fall NEVER come to an end! ‘I wonder how many miles I’ve fallen by this time?’ she said aloud.
      - ‘I must be getting somewhere near the centre of the earth.
      -  Let me see: that would be four thousand miles down, I think...
  - title: So she swollowed one of the cakes
    content: |
      and was delighted to find that she began shrinking directly. As soon as she was small enough to get through the door, she ran out of the house, and found quite a crowd of little animals and birds waiting outside.
  - title: The hedgehog was engaged
    content: |
      ... in a fight with another hedgehog, which seemed to Alice an excellent opportunity for croqueting one of them with the other: the only difficulty was, that her flamingo was gone across to the other side of the garden, where Alice could see it trying in a helpless sort of way to fly up into a tree
---

## Design

{% include "patterns/processlist/processlist.md" %}

## Theme Settings
These aspects can be set within the theme settings.

- `$theme-process-list-counter-background-color `: Background color of the counter circle.
- `$theme-process-list-counter-border-color `: Color of the border around the counter circle.
- `$theme-process-list-counter-border-width `: Size of the border around the counter circle.
- `$theme-process-list-counter-font-family `: Font family of the counter text.
- `$theme-process-list-counter-font-size `: Font size of the counter text.
- `$theme-process-list-counter-gap-color `: Color of gap between counter and connector. This should the the same as the background color behind the component.
- `$theme-process-list-counter-gap-width `: Size of gap between counter and connector.
- `$theme-process-list-counter-size`: Size of the counter circle.
- `$theme-process-list-counter-text-color `: Color of the number text inside the counter circle.
- `$theme-process-list-connector-color `: Color of the connector line between counter circles.
- `$theme-process-list-connector-width `: Width of the connector line between counter circles.
- `$theme-process-list-font-family `: Font family of the content text.
- `$theme-process-list-font-size `:Font size of the content text.
- `$theme-process-list-heading-color `:Color of the heading text.
- `$theme-process-list-heading-font-family `:Font family of the heading text.
- `$theme-process-list-heading-font-size `:Font size of the heading text.

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file. The component supports having multiple accordion groups on the page by adding the "alpha" property.

``` yml
processlist:
  - title: List item 1
    content: content
  - title: List item 2
    content: content
```

Include the pattern using this code:

``` markdown
 {{ include }}
```


