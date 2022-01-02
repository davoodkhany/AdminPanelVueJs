import Vue from "vue";
import '../node_modules/vuetify/dist/vuetify.min.css';
import 'animate.css';
// import 'font-awesome/css/font-awesome.css' // Ensure you are using css-loader
import colors from 'vuetify/lib/util/colors';


import './assets/css/all.min.css';
import './assets/css/brands.min.css';
import './assets/css/duotone.min.css';
import './assets/css/fontawesome.min.css';
import './assets/css/light.min.css';
import './assets/css/regular.min.css';
import './assets/css/solid.min.css';
import './assets/css/svg-with-js.min.css';
import './assets/css/v4-shims.min.css';


import Vuetify from 'vuetify'

import App from "./App.vue";


// Vue.config.productionTip = false

Vue.use(Vuetify,{
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue,
        secondary: colors.grey.darken1,
        accent: colors.pink.darken1,
        error: colors.red.accent3,
        background: colors.indigo.lighten5,
        info: colors.teal.darken1,
      },
      dark: {
        primary: colors.blue.darken4,
        background: colors.indigo.base,
        info: colors.teal.lighten1,
      },
    },
  }
})

new Vue({
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount("#app");

