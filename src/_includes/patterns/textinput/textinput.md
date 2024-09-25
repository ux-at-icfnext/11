{% if textinput.mask == "phone" %}
 {% assign mask = "___-___-____" %}
 {% assign pattern = "\d{3}-\d{3}-\d{4}" %}

{% elsif textinput.mask == "soc" %}
 {% assign mask = "___ __ ____" %}
 {% assign pattern = "^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$" %}

{% elsif textinput.mask == "zip" %}
 {% assign mask = "_____-____" %}
 {% assign pattern = "\d{3}-\d{3}-\d{4}" %}
{% else %}
  {% assign mask = "" %}
  {% assign pattern = "" %}
{% endif %}

{% if textinput.maxlength %}
  {% assign length = textinput.maxlength %}
{% else %}
  {% assign length = "9999999" %}
{% endif %}

<div class="usa-character-count">
    <label class="usa-label" for="with-hint-input">{{ textinput.label }}</label>
    <span id="with-hint-input-hint" class="usa-hint"
      >{{ textinput.hint-text }}</span>
    <div class="usa-input-group">
    <div class="usa-input-prefix" aria-hidden="true">
      <i class="fa-duotone fa-solid fa-{{ textinput.prefix }}"></i>
    </div>
    <span class="usa-input-mask--content" aria-hidden="true" id="hint">{{ mask}}</span>
    <input
      class="usa-input usa-character-count__field usa-input usa-masked"
      id="with-hint-input"
      maxlength="{{ length }}"
      name="with-hint-input"
      pattern="{{ pattern }}"
      data-mask="{{ mask}}"
      data-placeholder="{{ mask}}"
      aria-describedby="with-hint-input-info with-hint-input-hint"
    />
    <div class="usa-input-suffix" aria-hidden="true">{{ textinput.suffix }}</div>
    </div>
  {% if textinput.maxlength %}<span id="with-hint-input-info" class="usa-character-count__message"
    >You can enter up to {{ length }} characters</span
  >
  {% endif %}
  
</div>