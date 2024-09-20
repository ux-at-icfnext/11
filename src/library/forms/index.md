---
layout: layouts/base
title: Forms
---
<div class="grid-container">



<div class="grid-container usa-prose">
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-3">
  <h2>Form Elements</h2>
<ul>
  {% for l in collections.forms %}
    <li><a href="{{ l.url }}"
    {% if page.url == l.url %} class="text-fuchsia-500" {% endif %}>{{ l.data.title}}</a></li>
  {% endfor %}
</ul>
</div>
  <div class="tablet:grid-col-fill usa-prose">

# {{ title }}

## Theme settings
- `$theme-form-font-family`: Font family of the form.


## Identifying required fields
**Show whether a field is required or optional.** Mark required fields as required by using a red asterisk (<span style="color: red">\*</span>).
**Use text descriptions.** Combine red asterisks (<span style="color: red">\*</span>) with a text description at the top of the form instructing the user of its meaning.
Example: “A red asterisk (<span style="color: red">\*</span>) indicates a required field.”
**Use the required attribute.** Add the required attribute to your form elements to indicate that a field must be filled out before submitting the form.
**Mark optional fields as "optional."** Label optional fields with the word “optional” placed in parentheses.
Example: (optional)
**Let users know if there is an error.** Use a message or alert to notify the user if a field that is required was not completed, and indicate which field was not completed. Additionally, include an error notification in the page title (title element) for screen readers.
**Note:** _One-field forms are the exception and do not need to be marked with a required label or symbol._

## Known issues with screen readers
VoiceOver on iOS currently does not support fieldset and legend elements for forms. You can address this issue by using aria-labelledby="for-attribute-of-label id-of-legend id-of-additional-info" on each input in the fieldset. Using aria-labelledby will overwrite the default text read by the screen reader, so it is important to include all relevant information.

VoiceOver on OS X offers partial support for aria-describedby. There's full support for conveying description on text inputs, partial support for description changes when the text input is in focus, and no support for role="alert". Visit a11ysupport.io to view the full status of support.
  </div>
</div>
</div>



</div>
