<script>
import { MDCCheckbox } from '@material/checkbox';

export default {
    name: 'MDCCheckbox',

    inheritAttrs: false,

    model: {
        prop: 'checked',
        event: 'change'
    },

    props: {
        checked: {
            type: Boolean,
            default: false
        },

        indeterminate: {
            type: Boolean,
            default: false
        },

        disabled: {
            type: Boolean,
            default: false
        }
    },

    mounted() {
        this.mdcCheckbox = MDCCheckbox.attachTo(this.$refs.root);
        this.mdcCheckbox.checked = this.checked;
        this.mdcCheckbox.indeterminate = this.indeterminate;
        this.mdcCheckbox.disabled = this.disabled;
    },

    beforeDestroy() {
        this.mdcCheckbox.destroy();
    },

    computed: {
        classes() {
            return {
                'mdc-checkbox--indeterminate': this.indeterminate,
            };
        }
    },

    watch: {
        checked(value) {
            this.mdcCheckbox.checked = value;
        },

        indeterminate(value) {
            this.mdcCheckbox.indeterminate = value;
        },

        disabled(value) {
            this.mdcCheckbox.disabled = value;
        }
    }
}
</script>

<template>
    <div class="mdc-checkbox" :class="classes" ref="root">
        <input
            ref="input"
            type="checkbox"
            class="mdc-checkbox__native-control"
            :disabled="disabled"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
            v-bind="$attrs"
        >

        <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>

            <div class="mdc-checkbox__mixedmark"></div>
        </div>
    </div>
</template>