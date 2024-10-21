import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.esm.browser.min.js'
import './style.css'

const app = new Vue({
  data: {
    message: 'npx degit mancuoj-collective/tmpl app',
  },
})

app.$mount('#app')
