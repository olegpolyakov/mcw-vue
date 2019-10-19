<script>
export default {
    name: 'MDCListItemGraphic',

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
        class="mdc-list-item__graphic"
        ref="root"
        v-on="$listeners"
    >
        <slot />
    </component>
</template>