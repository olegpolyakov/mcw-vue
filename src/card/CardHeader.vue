<script>
export default {
    name: 'MDCCardHeader',

    props: {
        title: String,
        subtitle: String,

        tag: {
            type: String,
            default: 'div'
        }
    }
}
</script>

<template>
    <component :is="tag" class="mdc-card__header" v-on="$listeners">
        <div class="mdc-card__header__text">
            <h2 v-if="title" class="mdc-card__header__title">{{ title }}</h2>

            <h3 v-if="subtitle" class="mdc-card__header__subtitle">{{ subtitle }}</h3>

            <slot />
        </div>
    </component>
</template>

<style lang="scss">
@import '@material/theme/mixins';
@import '@material/typography/mixins';

.mdc-card {
    .mdc-card__header {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border-radius: 2px 2px 0 0;

        .mdc-card__header__graphic {
            @include mdc-theme-prop(color, text-secondary-on-light);
            margin-right: 16px;
        }

        .mdc-card__header__text {
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .mdc-card__header__title {
            @include mdc-typography(headline6);
            @include mdc-theme-prop(color, text-primary-on-light);
            @include mdc-typography-overflow-ellipsis;
            margin: 0;

            + .mdc-card__header__subtitle {
                line-height: 1.5rem;
            }
        }
    
        .mdc-card__header__subtitle {
            @include mdc-typography(body2);
            @include mdc-theme-prop(color, text-secondary-on-light);
            margin: 0;
        }

        .mdc-card__header__action {
            margin-left: auto;
        }

        .mdc-card__header__graphic,
        .mdc-card__header__action {
            &.mdc-icon-button,
            .mdc-icon-button {
                @include mdc-theme-prop(color, text-secondary-on-light);
                width: 32px;
                height: 32px;
                padding: 4px;
            }
        }
    }
}
</style>