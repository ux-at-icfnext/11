{% if textarea.maxlength %}

<div class="usa-character-count">
  <div class="usa-form-group">
    <label class="usa-label" for="with-hint-input">{{ textarea.label }}</label>
    {% if textarea.hint-text %}<span id="with-hint-input-hint" class="usa-hint"
      >{{ textarea.hint-text }}</span
    >{% endif %}
    <input
      class="usa-textarea usa-character-count__field"
      id="with-hint-input"
      maxlength="{{ textarea.maxlength }}"
      name="with-hint-input"
      aria-describedby="with-hint-input-info with-hint-input-hint"
    />
  </div>
  <span id="with-hint-input-info" class="usa-character-count__message"
    >You can enter up to {{ textarea.maxlength }} characters</span
  >
</div>

{% else %}

<label class="usa-label" for="with-hint-input">{{ textarea.label }}</label>
{% if textarea.hint-text %}<span id="with-hint-input-hint" class="usa-hint"
      >{{ textarea.hint-text }}</span>{% endif %}
<textarea
  class="usa-textarea"
  id="input-type-textarea"
  name="input-type-textarea"
></textarea>


{% endif %}