function registerComponents(app) {
    app.component('my-input-number', {
        mixins: [myMixins],
        props: ['modelValue', 'params'],
        data: function () {
            return {
                defaults: {
                    id: uid(),
                    label: '',
                    placeholder: '0',
                    class_input: ''
                }
            };
        },
        computed: {
            localValue: {
                get() {
                    return this.modelValue;
                }, 
                set(value) {
                    this.$emit('update:modelValue', value);
                }
            },
            the_params: function() {
                return {
                    ...this.defaults,
                    ...this.params
                }
            } 
        },
        mounted: function () {
            const digits = this.toDigits(this.modelValue);
            this.$el.querySelector('input').value = this.formatFr(digits);
        },
        watch: {
            modelValue(val) {
                const input = this.$el.querySelector('input');
                const digits = this.toDigits(val);
                const formatted = this.formatFr(digits);

                if (input && input.value !== formatted) input.value = formatted;
            }
        },
        template: `
        <div class="row" v-bind:class="the_params.class_input">
            <div class="col-7">
                <label v-bind:for="the_params.id" class="form-label">{{ the_params.label }} : </label>
            </div>
            <div class="col-5">
                <input
                    @input="onInput"
                    type="text"
                    class="form-control
                    form-control-xs"
                    v-bind:id="the_params.id"
                    autocomplete="off"
                    v-bind:placeholder="the_params.placeholder"
                >
            </div>
        </div>
        `
    });
}