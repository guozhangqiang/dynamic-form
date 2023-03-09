// 容易忽略的地方，改文件需要在 main.js 中引入
import VueRouter from 'vue-router'
//引入静态路由
import constantRouter from '@/router/constantRouter'
//引入一般路由
import genericRouter from '@/router/routerSet'
import router from '@/router'
import $http from '@/utils/request'

function genericMenuRoute (curRouter, menuList) {
  let newRoutes = [...constantRouter];

  menuList.forEach(item => {
    genericRouter.forEach(subItem => {
      // 匹配后端返回的菜单数据 menuList 和本地所有的菜单数据 genericRouter
      // 具体逻辑和写法，依据后端返回的数据格式和项目需求来处理
      if (item.id === subItem.id) {
        // 分 2 种情况，1 是没有子级菜单，2 是有子级菜单
        if (item.children && item.children.length > 0) {
          let model = {
            path: subItem.path,
            name: subItem.name,
            icon: subItem.icon,
            id: subItem.id,
            dropdown: subItem.dropdown,
            component: subItem.component,
            meta: subItem.meta,
            children: []
          };
          // 有子级菜单的，再次匹配各自的 children
          item.children.forEach(itemChild => {
            subItem.children.forEach(subItemChild => {
              if (itemChild.id === subItemChild.id) {
                let childModel = {
                  path: subItemChild.path,
                  name: subItemChild.name,
                  icon: subItemChild.icon,
                  id: subItemChild.id,
                  component: subItemChild.component,
                  meta: subItemChild.meta,
                };
                model.children.push(childModel);
              }
            })
          });
          newRoutes.push(model);
        } else {
          let model = {
            path: subItem.path,
            name: subItem.name,
            icon: subItem.icon,
            id: subItem.id,
            dropdown: subItem.dropdown,
            component: subItem.component,
            meta: subItem.meta,
            children: [
              {
                path: subItem.childPath,
                name: subItem.childName,
                icon: subItem.icon,
                id:  subItem.id,
                component: subItem.childComponent,
                meta: subItem.meta,
              },
            ]
          };
          newRoutes.push(model);
        }
      }
    })
  });

  //重置路由
  const currentRouter = () => new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: []
  });

  curRouter.matcher = currentRouter().matcher;
  // 添加路由
  curRouter.addRoutes(newRoutes);
  return newRoutes;
}

window.addRouteFlag = false;

router.beforeEach(async (to, from, next) => {
  if (to.matched.length === 0) {
    next('/not-found')
  } else {
    if (!window.addRouteFlag) {
      // 只需要加载一次菜单，不用每次刷新都加载
      window.addRouteFlag = true;
      // 请求后端返回来的菜单数据
      let res = await $http.$get({
        url: '/api/getMenuList'
      });
      let menuList = genericMenuRoute(router, res);
      // 存入缓存
      sessionStorage.setItem('menuList', JSON.stringify(menuList));
      // 跳转
      if (menuList && menuList.length > 0) {
        const matchPath = router.match(to.path).matched;
        if (matchPath.length > 0) {
          next()
        } else {
          // 匹配不到相应路由，跳转到以下路由，建议是 404 页面或者首页
          next('/not-found')
        }
      }
    } else {
      next()
    }
  }
});
