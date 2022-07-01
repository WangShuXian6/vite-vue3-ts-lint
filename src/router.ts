import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import News from './components/News.vue'
import * as VueRouter from 'vue-router'

export const routes = [
  {
    path: '/',
    component: HelloWorld,
    redirect: '/home',
    children: []
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/news',
    component: News
  }
]

console.log('import.meta.env:', import.meta.env)
console.log('import.meta.env.VITE_BASE_URL:', import.meta.env.VITE_BASE_URL)

export const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHistory(import.meta.env.VITE_BASE_URL),
  //history: VueRouter.createWebHistory('/abc'),
  routes // `routes: routes` 的缩写
})
