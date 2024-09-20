<label class="usa-label" for="{{combobox.name}}">{{ combobox.label }}</label>
<div class="usa-combo-box">
  <select class="usa-select" name="combobox.name" id="combobox.name">
   {% for b in combobox.list %}
    <option value="{{ b.value }}" {% if selected %} selected {% endif %}>{{ b.value }}</option>
   {% endfor %}
  </select>
</div>