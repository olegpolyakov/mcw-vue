<script>
export default {
    name: 'MDCListItemText',

    props: ['primary', 'secondary'],

    props: {
        primary: String,
        secondary: String,

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
        class="mdc-list-item__text"
        v-on="$listeners"
    >
        <span v-if="primary" class="mdc-list-item__primary-text">{{ primary }}</span>
        <span v-if="secondary" class="mdc-list-item__secondary-text">{{ secondary }}</span>
        <slot />
    </component>
</template>