<script>
import { MDCRadio } from '@material/radio';

export default {
    name: 'MDCRadio',

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

        disabled: {
            type: Boolean,
            default: false
        }
    },

    mounted() {
        this.mdcRadio = MDCRadio.attachTo(this.$refs.root);
        this.mdcRadio.checked = this.checked;
        this.mdcRadio.disabled = this.disabled;
    },

    beforeDestroy() {
        this.mdcRadio.destroy();
    },

    watch: {
        checked(value) {
            this.mdcRadio.checked = value;
        },

        disabled(value) {
            this.mdcRadio.disabled = value;
        }
    }
}
</script>

<template>
    <div class="mdc-radio" ref="root">
        <input
            ref="input"
            type="radio"
            class="mdc-radio__native-control"
            :checked="checked"
            :disabled="disabled"
            @change="$emit('change', $event.target.value)"
            v-bind="$attrs"
        >

        <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
        </div>
    </div>
</template>