
{% if alert.type == "info" %}
  {% assign class = "usa-site-alert--info" %}
{% elsif alert.type == "emergency"  %}
  {% assign class = "usa-site-alert--emergency" %}
{% endif %}

{% if alert.slim %}
  {% assign slim = "usa-site-alert--slim" %}
{% endif %}

{% if alert.icon %}
  {% assign icon = "usa-site-alert--no-icon" %}
{% endif %}

<section class="usa-site-alert {{class}} {{slim}} {{icon}}" aria-label="Site alert,">
<div class="usa-alert">
<div class="usa-alert__body">
{% if alert.title %}<h4 class="usa-alert__heading"> {{ alert.title }}</h4>{% endif %}
<p class="usa-alert__text">
{{ alert.content }}
</p>
</div>
</div>
</section>