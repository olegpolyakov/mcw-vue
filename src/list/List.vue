<script>
import { MDCList } from '@material/list';

export default {
    name: 'MDCList',

    props: {
        twoLine: Boolean,
        avatarList: Boolean,
        nonInteractive: Boolean,
        dense: Boolean,

        tag: {
            type: String,
            default: 'ul'
        }
    },

    mounted() {
        this.mdcList = MDCList.attachTo(this.$refs.root);
        this.$refs.root.addEventListener('MDCList:action', this.select);
    },

    beforeDestroy() {
        this.$refs.root.removeEventListener('MDCList:action', this.select);
        this.mdcList.destroy();
    },

    computed: {
        classes() {
            return {
                'mdc-list--two-line': this.twoLine,
                'mdc-list--avatar-list': this.avatarList,
                'mdc-list--non-interactive': this.nonInteractive,
                'mdc-list--dense': this.dense
            };
        }
    },

    methods: {
        select(event) {
            this.$emit('select', event.detail.index);
        }
    }
}
</script>

<template>
    <component
        :is="tag"
        class="mdc-list"
        :class="classes"
        ref="root"
        v-on="$listeners"
    >
        <slot />
    </component>
</template>