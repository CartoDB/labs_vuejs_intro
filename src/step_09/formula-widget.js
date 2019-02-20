// Register a component as a formula widget
Vue.component('formulaWidget', {
    'template': `
        <div class="as-mt--8 as-mb--4">
            <h2 class="as-subheader as-mb--0">{{ title }}</h2>
            <h4 class="as-caption as-mb--0 as-color--type-02" v-if="caption">{{ caption }}</h4>
            <p class="as-title as-mt--8" v-if="value == null">loading...</span></p>
            <p class="as-title as-mt--8 as-font--light" v-else-if="value>=0">
                {{formattedValue}} 
                <span class="as-body as-mb--0 as-color--type-02" v-if="unit">{{unit}}</span>
            </p>
        </div>
        `,
    props: {
        title: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: false
        },
        value: {
            type: Number,
            required: false
        },
        unit: {
            type: String,
            required: false,
            default: null
        },
        formatter: {
            type: Function,
            required: false
        }
    },
    computed: {
        formattedValue: function(){
            if (typeof this.formatter == 'function' && typeof this.value === 'number') {
                return this.formatter(this.value)
            } else if (typeof this.value === 'number') {
                return this.value
            } else {
                return null
            }
        }
    }
});