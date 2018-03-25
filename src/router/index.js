import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'refresh', noCache: true }
    }]
  },

]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   meta: { roles: ['admin', 'property'] }, // you can set roles in root nav
  //   children: [{
  //     path: 'index',
  //     component: _import('permission/index'),
  //     name: 'permission',
  //     meta: {
  //       title: 'permission',
  //       icon: 'lock',
  //       roles: ['admin', 'property'] // or you can only set roles in sub nav
  //     }
  //   }]
  // },
  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('svg-icons/index'),
      name: '人员注册',
      meta: { title: '注册申请', icon: 'icon', noCache: true }
    }]
  },

  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'component-demo',
    meta: {
      title: '人员管理',
      icon: 'component'
    },
    children: [
      // { path: 'json-editor', component: _import('components-demo/jsonEditor'), name: 'jsonEditor-demo', meta: { title: '人员注册' }},
      { path: 'tinymce', component: _import('components-demo/tinymce'), name: 'tinymce-demo', meta: { title: '业主管理' }},
      { path: 'markdown', component: _import('components-demo/markdown'), name: 'markdown-demo', meta: { title: '内部人员管理' }},
      { path: 'dnd-list', component: _import('components-demo/dndList'), name: 'dndList-demo', meta: { title: '访客管理' }},
      { path: 'splitpane', component: _import('components-demo/splitpane'), name: 'splitpane-demo', meta: { title: '非注册人员管理' }},
    ]
  },

  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'charts',
    meta: {
      title: '权限管理',
      icon: 'chart'
    },
    children: [
      { path: 'keyboard', component: _import('charts/keyboard'), name: 'keyboardChart', meta: { title: '大门权限', noCache: true }},
      { path: 'line', component: _import('charts/line'), name: 'lineChart', meta: { title: '楼幢权限', noCache: true }},
    ]
  },

  {
    path: '/charts2',
    component: Layout,
    redirect: 'noredirect',
    name: 'charts2',
    meta: {
      title: '门禁进出情况',
      icon: 'chart'
    },
    children: [
      { path: 'keyboard', component: _import('charts/keyboard'), name: 'keyboardChart', meta: { title: '业主进出', noCache: true }},
      { path: 'line', component: _import('charts/line'), name: 'lineChart', meta: { title: '访客进出', noCache: true }},
      { path: 'line', component: _import('charts/line'), name: 'lineChart', meta: { title: '非注册人员情况', noCache: true }},
    ]
  },



  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: '门禁控制',
      icon: '404'
    },
    children: [
      { path: '401', component: _import('errorPage/401'), name: 'page401', meta: { title: '大门控制', noCache: true }},
      { path: '404', component: _import('errorPage/404'), name: 'page404', meta: { title: '楼幢控制', noCache: true }}
    ]
  },


  {
    path: '/icon2',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('svg-icons/index'),
      name: 'icon2',
      meta: { title: '设备运行情况', icon: 'icon', noCache: true }
    }]
  },



  { path: '*', redirect: '/404', hidden: true }
]
