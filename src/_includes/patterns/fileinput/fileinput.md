
<label class="usa-label" for="file-input-specific">{{ fileinput.label }}</label>
{% if fileinput.hint %} <span class="usa-hint" id="file-input-specific-hint">{{ fileinput.hint }}</span>{% endif %}
<input
    id="file-input-single"
    class="usa-file-input"
    type="file"
    name="file-input-single"
  />
