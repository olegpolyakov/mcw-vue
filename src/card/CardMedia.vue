<script>
export default {
    name: 'MDCCardMedia',

    props: {
        src: String,
        wide: Boolean,
        square: Boolean
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
    <div class="mdc-card__media" :class="classes" :style="style">
        <div v-if="$slots.default" class="mdc-card__media-content">
            <slog />
        </div>
    </div>
</template>