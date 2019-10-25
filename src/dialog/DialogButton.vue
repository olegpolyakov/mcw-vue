<script>
import { MDCDialog } from '@material/dialog';

export default {
    name: 'MDCDialogButton',

    props: {
        label: String,
        action: String
    }
}
</script>

<template>
    <mdc-button
        type="button"
        class="mdc-dialog__button"
        :data-mdc-dialog-action="action"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </mdc-button>
</template>