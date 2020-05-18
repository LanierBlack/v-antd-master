// @ts-ignore
import Vue from 'vue'

import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app')
