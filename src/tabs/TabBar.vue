<script>
import { MDCTabBar } from '@material/tab-bar';

export default {
    name: 'MDCTabBar',

    props: {
        activeTab: [Number, String],
        minWidth: Boolean,
        stacked: Boolean,
        focusOnActivate: Boolean,
        useAutomaticActivation: Boolean
    },

    beforeMount() {
        if (this.minWidth) {
            this.$slots.default.filter(vnode => Boolean(vnode.tag)).forEach(vnode => {
                vnode.componentOptions.propsData.minWidth = true;
            });
        }

        if (this.stacked) {
            this.$slots.default.filter(vnode => Boolean(vnode.tag)).forEach(vnode => {
                vnode.componentOptions.propsData.stacked = true;
            });
        }
    },

    mounted() {
        this.mdcTabBar = MDCTabBar.attachTo(this.$refs.root);
        this.mdcTabBar.focusOnActivate = this.focusOnActivate;
        this.mdcTabBar.useAutomaticActivation = this.useAutomaticActivation;
        
        this.$refs.root.addEventListener('MDCTabBar:activated', this.change);
    },

    beforeDestroy() {
        this.$refs.root.removeEventListener('MDCTabBar:activated', this.change);
        this.mdcTabBar.destroy();
    },

    methods: {
        change(event) {
            this.$emit('change', event.detail.index);
        }
    },

    watch: {
        activeTab(newValue) {
            this.mdcTabBar.activateTab(newValue);
        },

        focusOnActivate(newValue) {
            this.mdcTabBar.focusOnActivate = newValue;
        },

        useAutomaticActivation(newValue) {
            this.mdcTabBar.useAutomaticActivation = newValue;
        }
    }
}
</script>

<template>
    <div class="mdc-tab-bar" role="tablist" ref="root">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@material/tab-bar/mdc-tab-bar.scss';
@import '@material/tab-scroller/mdc-tab-scroller.scss';
</style>