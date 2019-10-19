<template>
    <div class="mdc-card__action">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MDCCardAction',

    props: {
        primary: {
            type: Boolean,
            default: false
        },
        
        secondary: {
            type: Boolean,
            default: false
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