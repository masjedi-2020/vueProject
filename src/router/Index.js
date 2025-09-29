import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import About from '@/view/About.vue'
import Product from '@/view/Product.vue'
import Contact from '@/view/Contact.vue'

// create a router instance
const router = createRouter({
  // provide the history implementation
  history: createWebHashHistory(),
  // routes definition
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/products', name: 'product', component: Product },
    { path: '/contact', name: 'contact', component: Contact }
  ],
})

// export router
export default router
