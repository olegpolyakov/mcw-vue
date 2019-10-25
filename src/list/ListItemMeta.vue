<script>
export default {
    name: 'MDCListItemMeta',

    props: {
        tag: {
            type: String,
            default: 'span'
        }
    }
}
</script>

<template>
    <component
        :is="tag"
        class="mdc-list-item__meta"
        v-on="$listeners"
    >
        <slot />
    </component>
</template>