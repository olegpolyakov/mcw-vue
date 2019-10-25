<script>
export default {
    name: 'MDCCard',

    props: {
        outlined: Boolean,

        tag: {
            type: String,
            default: 'div'
        },
    },

    computed: {
        classes() {
            return {
                'mdc-card--outlined': this.outlined
            };
        }
    }
}
</script>

<template>
    <component :is="tag" class="mdc-card" :class="classes" v-on="$listeners">
        <slot />
    </component>
</template>