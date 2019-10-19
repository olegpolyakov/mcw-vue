<script>
export default {
    name: 'MDCDrawer',

    props: {
        dismissible: Boolean,
        modal: Boolean,
        open: Boolean,

        tag: {
            type: String,
            default: 'aside'
        }
    },

    computed: {
        classes() {
            return {
                'mdc-drawer--dismissible': this.dismissible,
                'mdc-drawer--modal': this.modal,
                'mdc-drawer--open': this.open
            };
        }
    }
}
</script>

<template>
    <component
        :is="tag"
        class="mdc-drawer"
        :class="classes"
        ref="root"
        v-on="$listeners"
    >
        <slot />
    </component>
</template>