import Vue from "vue";
import '../node_modules/vuetify/dist/vuetify.min.css';

import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader



import Vuetify from 'vuetify'

import App from "./App.vue";


// Vue.config.productionTip = false

Vue.use(Vuetify,{
  icons: {
    iconfont: 'fa4',
  },
})

new Vue({
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount("#app");