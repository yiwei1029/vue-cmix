import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Coordinator from '../components/Coordinator/Coordinator.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path:'/home',
    component:Home,
    children:[
      {path:'/coordinator',component:Coordinator}
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
