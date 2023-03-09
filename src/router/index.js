import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入静态路由
import constantRouter from './constantRouter'
// 引入一般路由
import genericRouter from './routerSet'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  } else {
    return originalPush.call(this, location).catch(err => err);
  }
};

Vue.use(VueRouter);

const constantRouterMap = [
  ...constantRouter,
  ...genericRouter
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router
