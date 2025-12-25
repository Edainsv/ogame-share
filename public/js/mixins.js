let myMixins = {
    methods: {
        formatFr(numStr) {
            if (numStr === '') return '';
            const n = Number(numStr);
            if (!Number.isFinite(n)) return '';

            return new Intl.NumberFormat('fr-FR').format(n);
        },
        toDigits: function (str) {
            return String(str ?? '').replace(/[^\d]/g, '');
        },
        formatFr(numStr) {
            if (numStr === '') return '';
            const n = Number(numStr);
            if (!Number.isFinite(n)) return '';

            return new Intl.NumberFormat('fr-FR').format(n);
        },
        onInput(e) {
            const input = e.target;
            const digits = this.toDigits(input.value);

            this.$emit('update:modelValue', digits === '' ? '' : Number(digits));

            const formatted = this.formatFr(digits);
            input.value = formatted;
        }
    }    
}