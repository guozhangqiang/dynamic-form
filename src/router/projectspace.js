import Layout from '@/views/Layout/index'

export default [
  {
    path: '/project-space',
    name: 'projectSpace',
    icon: '',
    id: '5',
    dropdown: true,
    component: Layout,
    meta: {
      title: '项目空间'
    },
    children: [
      {
        path: 'index',
        name: 'projectSpaceIndex',
        icon: '',
        id: '6',
        component: () => import(/* webpackChunkName: 'projectSpaceIndex' */ '@/views/Projectspace/index'),
        meta: {
          title: '项目空间主页'
        },
      },
      {
        path: 'menu',
        name: 'projectSpaceMenu',
        icon: '',
        id: '7',
        component: () => import(/* webpackChunkName: 'projectSpaceMenu' */ '@/views/Projectspace/menu'),
        meta: {
          title: '项目空间菜单'
        },
      }
    ]
  }
]