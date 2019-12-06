import Vue from "vue";
import Router from "vue-router"; 

Vue.use(Router);

import Layout from '@/layout'
export const constantRoutes = [ 
  {
    path: '/', 
	component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: { title: '首页', icon: 'home' }
    }]
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter() 
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router