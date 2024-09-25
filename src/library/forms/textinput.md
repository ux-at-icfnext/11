---
layout: layouts/right
title: Text Input
tags: forms
summary:


include: "{% include 'patterns/textinput/textinput.md' %}"

textinput:
  label: What should Alice eat next?

text-limited:
  label: What's mad about the hatter?
  hint-text: Keep it brief
  maxlength: 30 

text-suffix:
  label: What is the combined weight of Twiddle Dee & Twiddle Dum?
  suffix: pounds #optional

text-prefix:
  label: What does the Queen of Hearts love?
  prefix: heart # uses font awesome icon name


text-phone:
  label: Need to call the Queen?
  hint-text: enter your phone number
  mask: phone 

yaml-sample: |
  textinput:
    label: Title for field
    hint-text: hint text #optional
    maxlength: 30 #optional
    suffix: pounds #optional
    prefix: credit-card # uses font awesome icon name
    mask: # options phone | soc | zips (note you can't use masking and prefix together)
---

For this form element, we've combined the character count, input mask, and prefix / suffix components of the USWDS into one pattern -- as they are all aspects of an input box that we would want to put into use.

## Design
#### Default
{% include 'patterns/textinput/textinput.md' %}

#### With Masking
Options phone, soc, zip
{% assign textinput = text-phone %}
{% include 'patterns/textinput/textinput.md' %}

#### With Character limit
{% assign textinput = text-limited %}
{% include 'patterns/textinput/textinput.md' %}

#### Prefix
{% assign textinput = text-prefix %}
{% include 'patterns/textinput/textinput.md' %}

#### Suffix
{% assign textinput = text-suffix %}
{% include 'patterns/textinput/textinput.md' %}

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
