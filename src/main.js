import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueGtag from "vue-gtag";
import VueI18n from 'vue-i18n'
import VueMeta from 'vue-meta'

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
// Solid style
import { faCheck, faEnvelope, faChild, faBabyCarriage, faCar, faDice, faHeart, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// Brands style
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCheck, faLinkedinIn, faGithub, faEnvelope, faChild, faBabyCarriage, faCar,
  faDice, faHeart, faChevronDown);
Vue.component('vue-fontawesome', FontAwesomeIcon);

import './registerServiceWorker'
import 'buefy/dist/buefy.css'
import 'bulma-social/css/all.css'

Vue.use(VueI18n)
Vue.use(VueMeta)
Vue.use(VueGtag, {
  config: { id: "G-ZS64GVGEDE" }
})
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

import enLocale from './locales/en'
import esLocale from './locales/es'
const i18n = new VueI18n({
  locale: navigator?.language?.split('-')[0],
  fallbackLocale: 'es',
  messages: {
    en: enLocale,
    es: esLocale,
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
