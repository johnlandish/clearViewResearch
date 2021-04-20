// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/Globals/Panel'
import VueMeta from 'vue-meta'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueWindowSize from 'vue-window-size'

Vue.config.productionTip = false

Vue.component('panel', Panel)

Vue.use(Vuetify)
Vue.use(VueWindowSize)
Vue.use(VueYouTubeEmbed)

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered'
})
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed, { global: false })

Vue.use(Vuetify, {
  iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
  icons: {
    iconfont: 'fa'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
