<script>
import { MDCRadio } from '@material/radio';

export default {
    name: 'MDCRadio',

    inheritAttrs: false,

    model: {
        prop: 'selected',
        event: 'change'
    },

    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        disabled: Boolean,
        selected: String
    },

    computed: {
        checked() {
            let checked = this.value === this.selected;

            if (this.mdcRadio) {
                this.mdcRadio.checked = checked;
            }

            return checked;
        }
    },

    watch: {
        disabled(value) {
            this.mdcRadio.disabled = value;
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

    methods: {
        onChange(event) {
            this.$emit('change', event.target.value);
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
            :name="name"
            :value="value"
            :checked="checked"
            :disabled="disabled"
            @change="onChange"
            v-bind="$attrs"
        >

        <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
        </div>
    </div>
</template>