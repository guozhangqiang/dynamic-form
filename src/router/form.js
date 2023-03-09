import Layout from '@/views/Layout/index'
// 没有子级菜单的菜单，还是按照子级菜单的路由模式存储
// 以 dropdown 区分
// 因为涉及到动态路由，所以还需要添加以下三个参数用于匹配
// childPath
// childName
// childComponent

export default [
  {
    path: '/form',
    name: 'form',
    icon: '',
    id: '8',
    dropdown: false,
    component: Layout,
    childPath: 'index',
    childName: 'formIndex',
    childComponent: () => import(/* webpackChunkName: 'departmentIndex' */ '@/views/Form/index'),
    meta: {
      title: '动态表单'
    },
    children: [
      {
        path: 'index',
        name: 'formIndex',
        icon: '',
        id: '8',
        component: () => import(/* webpackChunkName: 'departmentIndex' */ '@/views/Form/index'),
        meta: {
          title: '动态表单'
        },
      },
    ]
  }
]
