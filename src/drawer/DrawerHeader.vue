<script>
export default {
    name: 'MDCDrawerHeader',

    props: {
        title: String,
        subtitle: String,

        tag: {
            type: String,
            default: 'header'
        }
    }
}
</script>

<template>
    <component :is="tag" class="mdc-drawer__header" v-on="$listeners">
        <h3 class="mdc-drawer__title" v-if="title">{{ title }}</h3>
        <h6 class="mdc-drawer__subtitle" v-if="subtitle">{{ subtitle }}</h6>
        <slot />
    </component>
</template>