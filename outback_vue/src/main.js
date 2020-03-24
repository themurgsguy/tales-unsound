import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'

import BootstrapVue from 'bootstrap-vue'
import VueFetch from '@/plugins/fetch'

Vue.use(BootstrapVue)
Vue.use(VueFetch, { baseUrl: `${process.env.VUE_APP_API_BASE_URL}` })

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
