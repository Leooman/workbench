import Vue from 'vue'
import { CHART,components } from '@/assets/lui.umd.min'

Vue.prototype.$charts = CHART

Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
})
