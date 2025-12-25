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
        },
        trd: function(str) {
            return trd(str);
        }
    }    ,
    computed: {
        loots: function () {
            return [
                'metal',
                'crystal',
                'deuterium'
            ];
        },
        ships: function () {
            return [
                'small_carrier',
                'large_carrier',
                'light_fighter',
                'heavy_fighter',
                'cruiser',
                'battlecruiser',
                'colonization_ships',
                'recycler',
                'spy_probe',
                'bomber',
                'destroyer',
                'death_star',
                'tracker',
                'reaper',
                'pathfinder'
            ];
        }
    }
}