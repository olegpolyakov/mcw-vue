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
    <component :is="tag" class="mdc-drawer__content">
        <slot />
    </component>
</template>