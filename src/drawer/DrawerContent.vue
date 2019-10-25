<script>
export default {
    name: 'MDCDrawerContent',

    props: {
        tag: {
            type: String,
            default: 'div'
        }
    }
}
</script>

<template>
    <component :is="tag" class="mdc-drawer__content" v-on="$listeners">
        <slot />
    </component>
</template>