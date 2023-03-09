export default [
  {
    path: '/api/getMenuList',
    method: 'get',
    data: [
      {
        path: '/system',
        name: 'system',
        icon: '',
        id: '1',
        meta: {
          title: '系统管理'
        },
        children: [
          {
            path: '/menu',
            name: 'systemMenu',
            icon: '',
            id: '2',
            meta: {
              title: '菜单管理'
            },
          },
          {
            path: '/params',
            name: 'systemParams',
            icon: '',
            id: '3',
            meta: {
              title: '参数管理'
            },
          }
        ]
      },
      {
        path: '/project-space',
        name: 'projectSpace',
        icon: '',
        id: '5',
        meta: {
          title: '项目空间'
        },
        children: [
          {
            path: '/index',
            name: 'projectSpaceIndex',
            icon: '',
            id: '6',
            meta: {
              title: '项目空间主页'
            },
          },
          {
            path: '/menu',
            name: 'projectSpaceMenu',
            icon: '',
            id: '7',
            meta: {
              title: '项目空间菜单'
            },
          }
        ]
      },
      {
        path: '/department',
        name: 'department',
        icon: '',
        id: '4',
        meta: {
          title: '部门管理'
        },
      },
      {
        path: '/form',
        name: 'form',
        icon: '',
        id: '8',
        meta: {
          title: '动态表单'
        },
      },
    ]
  }
]
