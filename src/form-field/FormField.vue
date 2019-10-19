<script>
import { MDCFormField } from '@material/form-field';

export default {
    name: 'MDCFormField',

    props: {
        label: String,
        alignEnd: Boolean
    },

    mounted() {
        this.mdcFormField = MDCFormField.attachTo(this.$refs.root);
    },

    beforeDestroy() {
        this.mdcFormField.destroy();
    },

    computed: {
        classes() {
            return {
                'mdc-form-field--align-end': this.alignEnd
            };
        }
    }
}
</script>

<template>
    <div
        ref="root"
        class="mdc-form-field"
        :class="classes"
    >
        <slot />

        <label>{{ label }}</label>
    </div>
</template>