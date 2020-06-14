import Vue from 'vue'
import { constant,components } from '@/assets/lui.umd.min'
Object.keys(constant).forEach(name => {
    Vue.prototype[`$${name.toLowerCase()}`] = constant[name]
})

Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
})
