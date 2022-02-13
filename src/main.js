import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'swiper/dis/css/swiper.min.css'
// import 'swiper/dist/js/swiper.min'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
