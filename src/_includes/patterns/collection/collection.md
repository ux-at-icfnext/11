
{% if collection.condensed %}
{% assign v = "usa-collection--condensed" %}
{% endif %}

<ul class="usa-collection {{ v }}">
{% for c in collection.list %}
<li class="usa-collection__item">
{% if c.img %}
<img class="usa-collection__img" src="/assets/images/{{ c.img }}" {% if c.alt %} alt="{{ c.alt }}" {% endif %} /> 
{% elsif c.date %}
<div class="usa-collection__calendar-date">
{% for d in c.date %}
<time datetime="{{ d.time }}">
<span class="usa-collection__calendar-date-month">{{ d.month }}</span>
<span class="usa-collection__calendar-date-day">{{ d. day }}</span></time>
{% endfor %}
</div>
{% endif %}

<div class="usa-collection__body">
<h4 class="usa-collection__heading">
<a class="usa-link"href="{{ c.link }}">{{ c.title }}</a>
</h4>
{% if c.body %}
<p class="usa-collection__description">
{{ c.body  }}
</p>
{% endif %}

<ul class="usa-collection__meta" aria-label="More information">
{% for m in c.meta %}
{% if m.author %}
<li class="usa-collection__meta-item">
{{ m.author }}
</li>
{% elsif m.source %}
<li class="usa-collection__meta-item position-relative">
<svg class="usa-icon position-relative bottom-neg-2px" aria-hidden="true" role="img" > <use xlink:href="/assets/img/sprite.svg#public"></use></svg>
{{ m.source }}
</li>
{%  endif %}
{% if m.date %}
<li class="usa-collection__meta-item">
<time datetime="{{ m.time }}">{{ m.date }}</time>
</li>
{% endif %}
{% endfor %}
</ul>

<ul class="usa-collection__meta" aria-label="Topics">
{% for t in c.tags %}
{% if t.highlight %}
<li class="usa-collection__meta-item usa-tag usa-tag--new">
{% else %} <li class="usa-collection__meta-item usa-tag"> {% endif %}{{ t.title }}</li>
{% endfor %}
</ul>
</div>
</li>
{% endfor %}
</ul>
