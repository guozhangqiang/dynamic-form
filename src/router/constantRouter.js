import Layout from '@/views/Layout/index'
export default [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    meta: {
      title: '首页'
    },
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: 'index' */ '@/views/Index/index'),
        meta: {
          title: '首页'
        },
        hidden: true,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/Login/index'),
    meta: {
      title: '登录'
    },
    hidden: true,
  },
  {
    path: '/not-found',
    name: 'notFound',
    component: () => import(/* webpackChunkName: 'notFound' */ '@/views/Error/page404'),
    meta: {
      title: '404'
    },
    hidden: true,
  },
]