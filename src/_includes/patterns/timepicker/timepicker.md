<div class="usa-form-group">
<label class="usa-label" id="appointment-time-label" for="appointment-time"
  >{{ timepicker.label }}</label
>
<div class="usa-hint" id="{{ timepicker.id}}">hh:mm</div>
<div class="usa-time-picker">
  <input
    class="usa-input"
    id="{{ timepicker.id}}"
    name="{{ timepicker.id}}"
    aria-describedby="{{ timepicker.aria-label}} {{ timepicker.aria-describedby}}"
  />
</div>
