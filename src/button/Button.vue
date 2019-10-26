<script>
import ripple from '../mixins/ripple';

export default {
    name: 'MDCButton',

    mixins: [ripple],

    props: {
        label: String,
        icon: String,
        leadingIcon: String,
        trailingIcon: String,
        raised: Boolean,
        unelevated: Boolean,
        outlined: Boolean,
        dense: Boolean,

        tag: {
            type: String,
            default: 'button'
        },
        ripple: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        classes() {
            return {
                'mdc-button--raised': this.raised,
                'mdc-button--unelevated': this.unelevated,
                'mdc-button--outlined': this.outlined,
                'mdc-button--dense': this.dense
            };
        }
    }
}
</script>

<template>
    <component
        :is="tag"
        ref="root"
        class="mdc-button"
        :class="classes"
        v-on="$listeners"
    >
        <i v-if="icon || leadingIcon" class="material-icons mdc-button__icon" aria-hidden="true">{{ icon || leadingIcon }}</i>

        <span class="mdc-button__label">
            <slot>{{ label }}</slot>
        </span>

        <i v-if="trailingIcon" class="material-icons mdc-button__icon" aria-hidden="true">{{ trailingIcon }}</i>
    </component>
</template>

<style lang="scss">
@import '@material/ripple/mdc-ripple.scss';
@import '@material/button/mdc-button.scss';
</style>