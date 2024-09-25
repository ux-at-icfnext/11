---
layout: layouts/base
title: Patterns
---
<div class="grid-container">

# {{ title }}

The patterns below have been collected from the USWDS system with information here on how to adjust the theme-settings for branding elements and also how to use the "smart" version of the pattern for rapid prototyping.
{: .usa-intro }

<ul class="usa-card-group">
  {% for l in collections.patterns %}
    <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-3">
      <div class="usa-card__container">
      <div class="usa-card__body">
        <h4 class="usa-card__heading">{{ l.data.title}}</h4>
        {{ l.data.summary}}
      </div>
      <div class="usa-card__footer">
        <a href="{{ l.url }}" class="usa-button">view pattern</a>
      </div>
      </div>
    </li>
  {% endfor %}
</ul>

</div>