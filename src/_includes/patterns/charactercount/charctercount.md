
<div class="usa-character-count">
  <div class="usa-form-group">
    <label class="usa-label" for="with-hint-input">{{ charactercount.label }}</label>
    <span id="with-hint-input-hint" class="usa-hint"
      >{{ charactercount.hint-text }}</span
    >
    <input
      class="usa-input usa-character-count__field"
      id="with-hint-input"
      maxlength="{{ charactercount.maxlength }}"
      name="with-hint-input"
      aria-describedby="with-hint-input-info with-hint-input-hint"
    />
  </div>
  <span id="with-hint-input-info" class="usa-character-count__message"
    >You can enter up to {{ charactercount.maxlength }} characters</span
  >
</div>