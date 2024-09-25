---
layout: layouts/base
title: Styles
---
<div class="grid-container">

# {{ title }}

Please review the styles below on how to edit their theme-settings to apply branding.
{: .usa-intro }

<ul class="usa-card-group">
  {% for l in collections.styles %}
    <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
      <div class="usa-card__container">
      <div class="usa-card__body">
        <h4 class="usa-card__heading">{{ l.data.title}}</h4>
      </div>
      <div class="usa-card__footer">
        <a href="{{ l.url }}" class="usa-button">view style</a>
      </div>
      </div>
    </li>
  {% endfor %}
</ul>

</div>