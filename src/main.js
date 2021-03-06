import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueResource from 'vue-resource'
import router from './router/index.js'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});