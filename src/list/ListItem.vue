<script>
import ripple from '../mixins/ripple';

export default {
    name: 'MDCListItem',

    mixins: [ripple],

    props: {
        disabled: Boolean,
        activated: Boolean,
        selected: Boolean,

        tag: {
            type: String,
            default: 'li'
        },
        ripple: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        classes() {
            return {
                'mdc-list-item--disabled': this.disabled,
                'mdc-list-item--activated': this.activated,
                'mdc-list-item--selected': this.selected
            };
        }
    }
}
</script>

<template>
    <component
        :is="tag"
        class="mdc-list-item"
        :class="classes"
        ref="root"
        v-on="$listeners"
    >
        <slot />
    </component>
</template>