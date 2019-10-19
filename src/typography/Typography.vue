<script>
export default {
    name: 'MDCTypography',

    props: {
        type: '',

        tag: {
            type: String,
            default: 'p'
        }
    },

    computed: {
        classes() {
            return {
                [`mdc-typography--${this.type}`]: this.type
            };
        }
    }
}
</script>

<template>
    <component
        :is="tag"
        class="mdc-typography"
        :class="classes"
    >
        <slot />
    </component>
</template>