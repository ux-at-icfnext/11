
<div class="usa-step-indicator {% if step.labels == 'none' %} usa-step-indicator--no-labels {% endif %} {% if step.centered %} usa-step-indicator--center {% endif %} {% if step.counters %} usa-step-indicator--counters {% endif %} {% if step.small %} usa-step-indicator--counters-sm {% endif %}" aria-label="progress">
<ol class="usa-step-indicator__segments">
{% for s in step.list%}
{% if s.status == "complete" %} 
  {% assign segment = "usa-step-indicator__segment--complete" %}
{% elsif s.status == "todo" %}
  {% assign segment = "" %}
{% else %}
  {% assign segment = "usa-step-indicator__segment--current" %}
{% endif %}
<li class="usa-step-indicator__segment {{ segment }}">
<span class="usa-step-indicator__segment-label">{{ s.content }} 
{% if s.status == "complete" %}<span class="usa-sr-only">completed</span>
{% elsif s.status == "todo" %}<span class="usa-sr-only">not completed</span>
{% endif %}
</span>
</li>
{% endfor %}
</ol>

<div class="usa-step-indicator__header">
  <h4 class="usa-step-indicator__heading">
    <span class="usa-step-indicator__heading-counter">
      <span class="usa-sr-only">Step</span>
      <span class="usa-step-indicator__current-step">{{ step.number }}</span>
      <span class="usa-step-indicator__total-steps">of {{ step.total }}</span> 
    </span>
      <span class="usa-step-indicator__heading-text">{{ step.title }}</span>
  </h4>
</div>
</div>