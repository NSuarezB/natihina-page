import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueGtag from "vue-gtag";



import VueMeta from 'vue-meta'

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
// Solid style
import { faCheck,faEnvelope, faChild, faBabyCarriage, faCar , faDice, faHeart} from "@fortawesome/free-solid-svg-icons";

// Brands style
import { faLinkedinIn,faGithub } from "@fortawesome/free-brands-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Regular style

library.add(faCheck, faLinkedinIn, faGithub, faEnvelope,faChild,faBabyCarriage,faCar,
  faDice,faHeart);
  Vue.component('vue-fontawesome', FontAwesomeIcon);
  
  import './registerServiceWorker'
  import 'buefy/dist/buefy.css'
  import 'bulma-social/css/all.css'
  
  Vue.use(VueGtag, {
  config: { id: "G-ZS64GVGEDE" }
  });
  
  Vue.use(VueMeta)
  Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
