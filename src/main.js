import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {CLICK_OUTSIDE_DIRECTIVE} from '@/utils/directives'

Vue.config.productionTip = false

Vue.directive('click-outside', CLICK_OUTSIDE_DIRECTIVE)


Vue.mixin({
  computed: {
    currentStep() {
      return store.getters['getCurrentStep'];
    },
    activeScenario() {
      return store.getters['getActiveScenario'];
    }
  }}
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
