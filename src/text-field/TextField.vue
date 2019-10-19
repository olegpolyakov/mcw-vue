<script>
import { MDCTextField } from '@material/textfield';

export default {
    name: 'MDCTextField',

    inheritAttrs: false,

    props: {
        value: String,
        label: String,
        leadingIcon: String,
        trailingIcon: String,
        outlined: Boolean,
        fullwidth: Boolean,
        textarea: Boolean,
        disabled: Boolean,
        input: Function
    },

    mounted() {
        this.mdcTextField = MDCTextField.attachTo(this.$refs.root);
    },

    beforeDestroy() {
        this.mdcTextField.destroy();
    },

    computed: {
        rootClasses() {
            return {
                'mdc-text-field--outlined': this.outlined,
                'mdc-text-field--fullwidth': this.fullwidth,
                'mdc-text-field--textarea': this.textarea,
                'mdc-text-field--disabled': this.disabled,
                'mdc-text-field--no-label': !this.label,
                'mdc-text-field--with-leading-icon': this.leadingIcon,
                'mdc-text-field--with-trailing-icon': this.trailingIcon
            };
        },

        labelClasses() {
            return {
                'mdc-floating-label--float-above': this.value
            };
        }
    }
}
</script>

<template>
    <div ref="root" class="mdc-text-field" :class="rootClasses">
        <i v-if="leadingIcon" class="material-icons mdc-text-field__icon" tabindex="0" role="button">{{ leadingIcon }}</i>

        <textarea v-if="textarea" class="mdc-text-field__input" rows="8" cols="40" :disabled="disabled" v-bind="$attrs"></textarea>
        <input v-else class="mdc-text-field__input" :value="value" :disabled="disabled"  @input="$emit('input', $event.target.value)" v-bind="$attrs">

        <label v-if="label && !outlined" class="mdc-floating-label" :class="labelClasses">{{ label }}</label>

        <i v-if="trailingIcon" class="material-icons mdc-text-field__icon" tabindex="0" role="button">{{ trailingIcon }}</i>

        <div v-if="outlined" class="mdc-notched-outline">
            <div class="mdc-notched-outline__leading"></div>

            <div v-if="label" class="mdc-notched-outline__notch">
                <label class="mdc-floating-label" :class="labelClasses">{{ label }}</label>
            </div>

            <div class="mdc-notched-outline__trailing"></div>
        </div>
        <div v-else class="mdc-line-ripple"></div>
    </div>
</template>