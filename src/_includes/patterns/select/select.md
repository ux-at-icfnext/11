<label class="usa-label" for="{{select.name}}">{{ select.label }}</label>
<select class="usa-select" name="select.name" id="select.name">
  {% for b in select.list %}
  <option value="{{ b.value }}" {% if selected %} selected {% endif %}>{{ b.value }}</option>
  {% endfor %}
</select>