{% if checkbox.type == "radio" %}
  {% assign type = "radio" %}
{% else %}
  {% assign type = "checkbox" %}
{% endif %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">{{ checkbox.label }}</legend>
  {% for c in checkbox.list%}
  <div class="usa-{{ type }}">
    <input
      class="usa-{{ type }}__input {% if checkbox.tile %}usa-{{ type }}__input--tile{% endif %}"
      id="{{ c.id }}"
      type="{{ type }}"
      name="{{ c.name }}"
      value="{{ c.value }}"
      {% if c.checked %} checked="checked" {% endif %} />
    <label class="usa-{{ type }}__label" for="{{ c.id }}"
      >{{ c.label }}</label
    >
  </div>
  {% endfor %}
