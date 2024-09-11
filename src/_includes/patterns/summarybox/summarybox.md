<style>
  /* markdown is adding p tags into the list -- this makes sure they don't messup the leading */
  .summary-md-fix p { margin: 0; padding: 0;}
</style>

<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" >
<div class="usa-summary-box__body">
<h4 class="usa-summary-box__heading" id="summary-box-key-information">
{{ summarybox.title }}
</h4>
<div class="usa-summary-box__text">
{% if summarybox.text %} {{ summarybox.text | markdown }}{% endif %}
{% if summarybox.list%}
<ul class="usa-list summary-md-fix">{% for s in summarybox.list %}<li>{{ s.item  | markdown}} </li>{% endfor %}</ul>
{% endif %}
</div>
</div>
</div>
