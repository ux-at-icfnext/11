---
layout: layouts/right
title: Modal
tags: patterns
summary:

include: "{% include 'patterns/modal/modal.md' %}"

modal:
  id: example-modal-1
  label: Open me
  aria-label: modal-1-heading
  aria-description: modal-1-description
  title: Alice began to feel very uneasy
  content: |
    to be sure, she had not as yet had any dispute with the Queen, but she knew that it might happen any minute, ‘and then,’ thought she, ‘what would become of me? They’re dreadfully fond of beheading people here; the great wonder is, that there’s any one left alive!’
  button:
    - link: "#"
      text: don't click me
      class: usa-button--outline
    - link: "#"
      text: click me

modal-large:
  id: example-modal-2
  label: Open me
  large: true
  aria-label: modal-2-heading
  aria-description: modal-2-description
  title: Alice began to feel very uneasy
  content: |
    to be sure, she had not as yet had any dispute with the Queen, but she knew that it might happen any minute, ‘and then,’ thought she, ‘what would become of me? They’re dreadfully fond of beheading people here; the great wonder is, that there’s any one left alive!’
  button:
    - link: "#"
      text: don't click me
      class: usa-button--outline
    - link: "#"
      text: click me

modal-forced:
  id: example-modal-3
  label: Open me
  forced: true
  aria-label: modal-3-heading
  aria-description: modal-3-description
  title: Alice began to feel very uneasy
  content: |
    to be sure, she had not as yet had any dispute with the Queen, but she knew that it might happen any minute, ‘and then,’ thought she, ‘what would become of me? They’re dreadfully fond of beheading people here; the great wonder is, that there’s any one left alive!’
  button:
    - link: "#"
      text: don't click me
      class: usa-button--outline
    - link: "#"
      text: click me

---

## Design
### Default
{% include 'patterns/modal/modal.md' %}

### Large
{% assign modal = modal-large %}

{% include 'patterns/modal/modal.md' %}

### Forced
A button must be clicked to dismiss
{% assign modal = modal-forced %}

{% include 'patterns/modal/modal.md' %}

## Theme Settings
- `$theme-modal-border-radius `: The border radius of the modal window.
- `$theme-modal-default-max-width `: Maximum width of default modal window.
- `$theme-modal-lg-max-width `: Maximum width of large modal window.
- `$theme-modal-lg-content-max-width `: Maximum width of content area within large modal window.

## Variations
- `.usa-modal--lg`: Add **.usa-modal--lg** to **.usa-modal** for a larger window and larger heading size on wider screens.


## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

``` yml
modal:
  id: example-modal-1
  label: Open me
  large: # optional, defaults to false
  forced:  # optional, defaults to false
  aria-label: modal-1-heading
  aria-description: modal-1-description
  title: Alice began to feel very uneasy
  content: |
    to be sure, she had not as yet had any dispute with the Queen, but she knew that it might happen any minute, ‘and then,’ thought she, ‘what would become of me? They’re dreadfully fond of beheading people here; the great wonder is, that there’s any one left alive!’
  button:
    - link: "#"
      text: don't click me
      class: usa-button--outline
    - link: "#"
      text: click me
```

Include the pattern using this code:

``` markdown
 {{ include }}
```

