---
layout: layouts/base
title: Styles
---
<div class="grid-container">

# {{ title }}

_page still in progress_

<ul>
  {% for l in collections.styles %}
    <li><a href="{{ l.url }}"
    {% if page.url == l.url %} class="text-fuchsia-500" {% endif %}>{{ l.data.title}}</a></li>
  {% endfor %}
</ul>

</div>