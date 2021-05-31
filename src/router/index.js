import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/project',
    name: 'CreateProject',
    meta: {
      layout: 'main'
    },
    children: [
      {
        path: 'create',
        layout: 'empty',
        component: () => import('../components/Stepper.vue'),
      },
      {
        path: 'update',
        layout: 'empty',
        component: () => import('../components/TestComponent.vue')
      }
    ],
    component: () => import('../views/CreateProject.vue')
  },
  {
    path: '/projects',
    name: 'ProjectsList',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/ProjectList.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/toolkit',
    name: 'Toolkit',
    component: () => import('../views/Toolkit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
