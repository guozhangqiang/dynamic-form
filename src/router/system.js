import Layout from '@/views/Layout/index'

export default [
  {
    path: '/system',
    name: 'system',
    icon: '',
    id: '1',
    dropdown: true,
    component: Layout,
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: 'menu',
        name: 'systemMenu',
        icon: '',
        id: '2',
        component: () => import(/* webpackChunkName: 'systemMenu' */ '@/views/System/menu'),
        meta: {
          title: '菜单管理'
        },
      },
      {
        path: 'params',
        name: 'systemParams',
        icon: '',
        id: '3',
        component: () => import(/* webpackChunkName: 'systemParams' */ '@/views/System/params'),
        meta: {
          title: '参数管理'
        },
      }
    ]
  }
]