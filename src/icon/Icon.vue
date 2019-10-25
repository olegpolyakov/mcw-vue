<script>
export default {
    name: 'MDCIcon',

    props: {
        size: String,
        dark: Boolean,
        light: Boolean,
        inactive: Boolean
    },

    computed: {
        classes() {
            return {
                [`mdc-icon--${this.size}`]: this.size,
                'mdc-icon--dark': this.dark,
                'mdc-icon--light': this.light,
                'mdc-icon--inactive': this.inactive
            };
        }
    }
}
</script>

<template>
    <i class="mdc-icon material-icons" :class="classes" v-on="$listeners"></i>
</template>

<style lang="scss">
$icon-dark-color: rgba(0, 0, 0, 0.54);
$icon-dark-inactive-color: rgba(0, 0, 0, 0.26);
$icon-light-color: rgba(255, 255, 255, 0.54);
$icon-light-inactive-color: rgba(255, 255, 255, 0.3);

.mdc-icon {
    user-select: none;

    &.mdc-icon--18 {
        font-size: 18px;
    }

    &.mdc-icon--24 {
        font-size: 24px;
    }

    &.mdc-icon--36 {
        font-size: 36px;
    }

    &.mdc-icon--48 {
        font-size: 48px;
    }

    &.mdc-icon--dark {
        color: $icon-dark-color;
    }

    &.mdc-icon--dark.mdc-icon--inactive {
        color: $icon-dark-inactive-color;
    }

    &.mdc-icon--light {
        color: $icon-light-color;
    }

    &.mdc-icon--light.mdc-icon--inactive {
        color: $icon-light-inactive-color
    }
}
</style>