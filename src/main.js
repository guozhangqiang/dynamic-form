import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/element-ui-style-cover.scss'

import Bus from '@/lib/bus.js'
Vue.prototype.$bus = Bus;

Vue.config.productionTip = false;

// 定义一个mock数据开关
const mock=true;
if(mock){
  require('./mock/mock');
}

import $http from '@/utils/request'
Vue.prototype.$http = $http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
