<script>
import { MDCDialog } from '@material/dialog';

export default {
    name: 'MDCDialogButton',

    props: {
        label: {
            type: String
        },

        action: {
            type: String
        }
    }
}
</script>

<template>
    <button type="button" class="mdc-button mdc-dialog__button" :data-mdc-dialog-action="action">
        <span class="mdc-button__label">
            <slot>{{ label }}</slot>
        </span>
    </button>
</template>