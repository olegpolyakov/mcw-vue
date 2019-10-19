<template>
    <div class="mdc-card" :class="classes" v-bind="$attrs" v-on="$listeners">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MDCCard',

    props: {
        outlined: {
            type: Boolean,
            default: false
        }
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