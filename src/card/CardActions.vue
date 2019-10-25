<script>
export default {
    name: 'MDCCardActions',

    props: {
        fullBleed: Boolean,

        tag: {
            type: String,
            default: 'div'
        }
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
    <component :is="tag" class="mdc-card__actions" :class="classes" v-on="$listeners">
        <div v-if="$slots.buttons" class="mdc-card__action-buttons">
            <slot name="buttons" />
        </div>

        <div v-if="$slots.icons" class="mdc-card__action-icons">
            <slot name="icons" />
        </div>

        <slot />
    </component>
</template>