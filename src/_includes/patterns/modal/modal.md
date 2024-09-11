{% if modal.forced %}
  <div class="margin-y-3">
    <a
      href="#{{ modal.id }}"
      class="usa-button"
      aria-controls="{{ modal.id }}"
      data-open-modal
      >{{ modal.label }}</a
    >
    <div
      class="usa-modal {% if modal.large %}usa-modal--lg{% endif%}"
      id="{{ modal.id }}"
      aria-labelledby="{{ modal.aria-label }}"
      aria-describedby="{{ modal.aria-description }}"
    >
      <div class="usa-modal__content">
        <div class="usa-modal__main">
          <p class="usa-modal__heading" id="{{ modal.aria-label }}">{{ modal.title }}</p>
          <div class="usa-prose">
            <p id="{{ modal.aria-description }}">{{ modal.content }}</p>
          </div>
          <div class="usa-modal__footer">
          {% assign button = modal.button %}
          {% include "patterns/button/button.md" %}
          </div>
        </div>
      </div>
    </div>
  </div>
  {% else %}
  <div class="margin-y-3">
    <a
      href="#{{ modal.id }}"
      class="usa-button"
      aria-controls="{{ modal.id }}"
      data-open-modal
      >{{ modal.label }}</a
    >
    <div
      class="usa-modal {% if modal.large %}usa-modal--lg{% endif%}"
      id="{{ modal.id }}"
      aria-labelledby="{{ modal.aria-label }}"
      aria-describedby="{{ modal.aria-description }}"
    >
      <div class="usa-modal__content">
        <div class="usa-modal__main">
          <p class="usa-modal__heading" id="{{ modal.aria-label }}">{{ modal.title }}</p>
          <div class="usa-prose">
            <p id="{{ modal.aria-description }}">{{ modal.content }}</p>
          </div>
          <div class="usa-modal__footer">
          {% assign button = modal.button %}
          {% include "patterns/button/button.md" %}
          </div>
        </div>
        <button
          type="button"
          class="usa-button usa-modal__close"
          aria-label="Close this window"
          data-close-modal
        >
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#close"></use></svg>
        </button>
      </div>
    </div>
  </div>
{% endif %}