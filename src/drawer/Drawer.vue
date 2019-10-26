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
        ref="root"
        class="mdc-drawer"
        :class="classes"
        v-on="$listeners"
    >
        <slot />
    </component>
</template>

<style lang="scss">
@import '@material/drawer/mdc-drawer.scss';
</style>