<script>
export default {
    name: 'MDCCardSection',

    props: {
        primary: Boolean,
        secondary: Boolean,

        tag: {
            type: String,
            default: 'div'
        }
    },

    computed: {
        classes() {
            return {
                'mdc-card__section--primary': this.primary,
                'mdc-card__section--secondary': this.secondary
            };
        }
    }
}
</script>

<template>
    <component :is="tag" class="mdc-card__section" :class="classes" v-on="$listeners">
        <slot />
    </component>
</template>

<style lang="scss">
.mdc-card {
    .mdc-card__section {
        box-sizing: border-box;
        
        &.mdc-card__section--primary {
            padding: 8px 16px;
        }
    
        &.mdc-card__section--secondary {    
            padding: 0 16px 8px;
        }
    }
}
</style>