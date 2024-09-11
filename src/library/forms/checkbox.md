---
layout: layouts/right
title: Checkbox and Radio Buttons
tags: forms
summary:

include: "{% include 'patterns/charactercount/charactercount.md' %}"

checkbox:
  label: What should Alice do next?
  list:
    - id: check-tea
      name: alice-drinks
      value: drinks-tea
      checked: true
      label: Drink Tea
    - id: check-eat
      name: alice-eats
      value: drinks-eats
      label: Eat Toast

checkbox-tile:
  label: What should Alice do next?
  tile: true
  list:
    - id: check-tea
      name: alice-drinks
      value: drinks-tea
      checked: true
      label: Drink Tea
    - id: check-eat
      name: alice-eats
      value: drinks-eats
      label: Eat Toast

## can I update this to be both checkbox & radio box
radio:
  label: What should Alice do next?
  type: radio
  list:
    - id: check-tea
      name: alice-drinks
      value: drinks-tea
      checked: true
      label: Drink Tea
    - id: check-eat
      name: alice-eats
      value: drinks-eats
      label: Eat Toast

radio-tile:
  label: What should Alice do next?
  type: radio
  tile: true
  list:
    - id: check-tea
      name: alice-drinks
      value: drinks-tea
      checked: true
      label: Drink Tea
    - id: check-eat
      name: alice-eats
      value: drinks-eats
      label: Eat Toast

yaml-sample: |

  checkbox:
    label: What should Alice do next?
    type: radio # optional, defaults to checkbox
    tile: false # optional, defaults to false, set to true to use.
    list:
      - id: check-tea
        name: alice-drinks
        value: drinks-tea
        checked: true
        label: Drink Tea
      - id: check-eat
        name: alice-eats
        value: drinks-eats
        label: Eat Toast

---
## Design
### Checkbox
{% include 'patterns/checkbox/checkbox.md' %}

### Checkbox Tile
{% assign checkbox = checkbox-tile%}
{% include 'patterns/checkbox/checkbox.md' %}

### Radio
{% assign checkbox = radio%}
{% include 'patterns/checkbox/checkbox.md' %}

### Radio Tile
{% assign checkbox = radio-tile%}
{% include 'patterns/checkbox/checkbox.md' %}

## Theme Settings
- `$theme-checkbox-border-radius `: Checkbox border radius for rounded corners.
- `$theme-input-background-color `: Background color for radio and checkbox inputs.
- `$theme-input-tile-border-radius `: Tile border radius for rounded corners.
- `$theme-input-tile-border-width `: Tile border thickness

## Variations
- `.usa-radio__input--tile`: Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page.

## Library Use
Make sure to inclose the full form between the `<form class="usa-form"> </form>` tags.


**Front Matter**
``` yml
{{ yaml-sample }}
```


Include the pattern using this code:

``` markdown
 {{ include }}
```


