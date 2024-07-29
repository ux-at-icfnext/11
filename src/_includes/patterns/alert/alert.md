{% if alert.no-icon %}
  {% assign icon = "usa-alert--info usa-alert--no-icon" %}
{% endif %}
<div class="usa-alert {{ alert.type }} {{icon}}">
<div class="usa-alert__body">
{% if alert.heading %}
<h4 class="usa-alert__heading">{{ alert.heading }}</h4>
{% endif %}
{% if alert.body %}
<p class="usa-alert__text">{{ alert.body | markdownify }}</p>
{% endif %}
</div>
</div>