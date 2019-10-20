<script>
export default {
    name: 'MDCCardButton'
}
</script>

<template>
    <mdc-button class="mdc-card__action mdc-card__action--button" v-bind="$attrs" v-on="$listeners">
        <slot />
    </mdc-button>
</template>