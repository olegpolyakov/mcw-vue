<script>
export default {
    name: 'MDCCardMedia',

    props: {
        src: String,
        wide: Boolean,
        square: Boolean,

        tag: {
            type: String,
            default: 'div'
        }
    },

    computed: {
        classes() {
            return {
                'mdc-card__media--16-9': this.wide,
                'mdc-card__media--square': this.square
            };
        },

        style() {
            return this.src && {
                backgroundImage: `url(${this.src})`
            };
        }
    }
}
</script>

<template>
    <component :is="tag" class="mdc-card__media" :class="classes" :style="style" v-on="$listeners">
        <div v-if="$slots.default" class="mdc-card__media-content">
            <slog />
        </div>
    </component>
</template>