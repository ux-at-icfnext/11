
    <button
      type="button"
      class="usa-button usa-tooltip"
      data-position="{{ tooltip.position }}"
      data-classes="{% if tooltip.utility%}{{ tooltip.utility }}{% endif %}"
      title="{{ tooltip.tip }}"
    >{{ tooltip.text }}
    </button>
