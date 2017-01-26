// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
require('../semantic/dist/semantic.min.css')

Vue.use(vueResource)
Vue.use(vueRouter)

// const router = new vueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//   // {path: '/', component: Users}
//   ]

// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
