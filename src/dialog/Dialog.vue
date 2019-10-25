<script>
import { MDCDialog } from '@material/dialog';

export default {
    name: 'MDCDialog',

    props: {
        title: String,
        open: Boolean,

        tag: {
            type: String,
            default: 'div'
        }
    },

    mounted() {
        this.mdcDialog = MDCDialog.attachTo(this.$refs.root);
        this.$refs.root.addEventListener('MDCDialog:opened', this.opened);
        this.$refs.root.addEventListener('MDCDialog:closed', this.closed);
    },

    beforeDestroy() {
        this.$refs.root.removeEventListener('MDCDialog:opened', this.opened);
        this.$refs.root.removeEventListener('MDCDialog:closed', this.closed);
        this.mdcDialog.destroy();
    },

    methods: {
        opened() {
            this.$emit('open');
        },

        closed() {
            this.$emit('close');
        }
    },

    watch: {
        open(newValue) {
            if (newValue === true && this.mdcDialog.isOpen === false) {
                this.mdcDialog.open();
            } else if (newValue === false && this.mdcDialog.isOpen === true) {
                this.mdcDialog.close();
            }
        }
    }
}
</script>

<template>
    <component :is="tag" ref="root" class="mdc-dialog" role="alertdialog" aria-modal="true" v-on="$listeners">
        <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface">
                <h2 v-if="title" class="mdc-dialog__title">{{ title }}</h2>

                <div v-if="$slots.content" class="mdc-dialog__content">
                    <slot name="content"></slot>
                </div>

                <div v-if="$slots.actions" class="mdc-dialog__actions">
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>

        <div class="mdc-dialog__scrim"></div>
    </component>
</template>