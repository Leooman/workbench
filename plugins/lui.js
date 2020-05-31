import Vue from 'vue'
import { CHART,UTILS,components } from '@/assets/lui.umd.min'

Vue.prototype.$charts = CHART
Vue.prototype.$utils = UTILS

Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
})
