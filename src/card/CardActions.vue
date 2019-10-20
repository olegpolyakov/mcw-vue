<script>
export default {
    name: 'MDCCardActions',

    props: {
        fullBleed: Boolean
    },

    computed: {
        classes() {
            return {
                'mdc-card__actions--full-bleed': this.fullBleed
            };
        }
    }
}
</script>

<template>
    <div class="mdc-card__actions" :class="classes">
        <div v-if="$slots.buttons" class="mdc-card__action-buttons">
            <slot name="buttons" />
        </div>

        <div v-if="$slots.icons" class="mdc-card__action-icons">
            <slot name="icons" />
        </div>

        <slot />
    </div>
</template>