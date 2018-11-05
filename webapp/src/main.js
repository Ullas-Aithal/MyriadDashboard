import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

export const dataBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
