
{% if mask.type == "soc" %}

<label class="usa-label" for="ssn">{{ mask.label }}</label>
<div class="usa-hint" id="ssnHint">For example, 123 45 6789</div>
<span class="usa-input-mask" data-mask="___ __ ____"><span class="usa-input-mask--content" aria-hidden="true" id="ssnMask">___ __ ____</span><input id="ssn" inputmode="numeric" name="ssn" pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$" class="usa-input usa-masked" aria-describedby="ssnHint" maxlength="11" data-placeholder="___ __ ____"></span>

{% elsif mask.type == "phone" %}

<label class="usa-label" for="tel">{{ mask.label }}</label>
<div class="usa-hint" id="telHint">For example, 123-456-7890</div>
<span class="usa-input-mask" data-mask="___-___-____"><span class="usa-input-mask--content" aria-hidden="true" id="tel">___-___-____</span><input id="tel" inputmode="numeric" name="tel" pattern="\d{3}-\d{3}-\d{4}" class="usa-input usa-masked" aria-describedby="telHint" maxlength="11" data-placeholder="___-___-____"></span>

{% elsif mask.type == "zip" %}

<label class="usa-label" for="zip">{{ mask.label }}</label>
<div class="usa-hint" id="zipHint">For example, 12345-6789</div>
<span class="usa-input-mask" data-mask="_____-____"><span class="usa-input-mask--content" aria-hidden="true" id="zip">_____-____</span><input id="zip" inputmode="numeric" name="zip" pattern="\d{3}-\d{3}-\d{4}" class="usa-input usa-masked" aria-describedby="zipHint" maxlength="11" data-placeholder="_____-____"></span>

{% elsif mask.type == "alpha" %}

<label class="usa-label" for="alpha">{{ mask.label }}</label>
<div class="usa-hint" id="alphaHint">For example, A1B 2C3</div>
<span class="usa-input-mask" data-mask="___ ___"><span class="usa-input-mask--content" aria-hidden="true" id="alpha">___ ___</span><input id="alpha" inputmode="alphanumeric" name="alpha" pattern="\d{3}-\d{3}-\d{4}" class="usa-input usa-masked" aria-describedby="alphaHint" maxlength="11" data-placeholder="___ ___" data-charset="A#A #A#"></span>

{% endif %}