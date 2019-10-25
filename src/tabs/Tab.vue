<script>
import { MDCTab } from '@material/tab';
import ripple from '../mixins/ripple';

export default {
    name: 'MDCTab',

    mixins: [ripple],

    props: {
        icon: String,
        label: String,
        active: Boolean,
        stacked: Boolean,
        minWidth: Boolean,

        tag: {
            type: String,
            default: 'button'
        },
        ripple: {
            type: Boolean,
            default: true
        }
    },

    mounted() {
        this.mdcTab = MDCTab.attachTo(this.$refs.root);
    },

    beforeDestroy() {
        this.mdcTab.destroy();
    },

    computed: {
        rootClasses() {
            return {
                'mdc-tab--active': this.active,
                'mdc-tab--stacked': this.stacked,
                'mdc-tab--min-width': this.minWidth
            };
        },

        indicatorClasses() {
            return {
                'mdc-tab-indicator--active': this.active
            };
        }
    }
}
</script>

<template>
    <component
        :is="tag"
        ref="root"
        class="mdc-tab"
        :class="rootClasses"
        role="tab"
        :aria-selected="active"
        :tabindex="active ? '0' : '-1'"
        v-on="$listeners"
    >
        <span class="mdc-tab__content">
            <span class="mdc-tab__icon material-icons" v-if="icon" aria-hidden="true">{{ icon }}</span>

            <span class="mdc-tab__text-label" v-if="label || $slots.default">
                {{ label }}
                <slot />
            </span>
        </span>

        <span class="mdc-tab-indicator" :class="indicatorClasses">
            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
        </span>

        <span class="mdc-tab__ripple"></span>
    </component>
</template>