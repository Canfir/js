import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../pages/RegisterView.vue'
import LoginView from '../pages/LoginView.vue'
import MainView from '../pages/MainView.vue'
import UsersView from '../pages/UsersView.vue'
import UniversityView from '../pages/UniversityView.vue'
import GroupsView from '../pages/GroupsView.vue'
import StudentsView from '../pages/StudentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {layout: 'default'}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {layout: 'default'}
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
      meta: {layout: 'main'}
    },
    {
      path: '/user',
      name: 'user',
      component: UsersView,
      meta: {layout: 'main'}
    },
    {
      path: '/university',
      name: 'university',
      component: UniversityView,
      meta: {layout: 'main'}
    },
    {
      path: '/student',
      name: 'students',
      component: StudentsView,
      meta: {layout: 'main'}
    },
    {
      path: '/group',
      name: 'group',
      component: GroupsView,
      meta: {layout: 'main'}
    },
  ]
})

export default router
