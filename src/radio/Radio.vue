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

    mounted() {
        this.mdcRadio = MDCRadio.attachTo(this.$refs.root);
        this.mdcRadio.checked = this.checked;
        this.mdcRadio.disabled = this.disabled;
    },

    beforeDestroy() {
        this.mdcRadio.destroy();
    },

    computed: {
        checked() {
            let checked = this.value === this.selected;

            if (this.mdcRadio) {
                this.mdcRadio.checked = checked;
            }

            return checked;
        },

        listeners() {
            delete this.$listeners['change'];
            return this.$listeners;
        }
    },

    watch: {
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
            :name="name"
            :value="value"
            :checked="checked"
            :disabled="disabled"
            @change="$emit('change', $event.target.value, $event)"
            v-bind="$attrs"
            v-on="listeners"
        >

        <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
        </div>
    </div>
</template>