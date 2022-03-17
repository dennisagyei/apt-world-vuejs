import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

import VueAnalytics from 'vue-analytics';
// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-44364294-1',
  router
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() { 
    this.$store.commit('initialiseStore');
  },
  render: h => h(App)
}).$mount('#app')
