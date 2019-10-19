import { MDCRipple } from '@material/ripple';

export default {
    mounted() {
        if (this.ripple && this.$refs.root) {
            this.mdcRipple = MDCRipple.attachTo(this.$refs.root);        
        }
    },

    beforeDestroy() {
        if (this.mdcRipple) {
            this.mdcRipple.destroy();
        }
    }
};