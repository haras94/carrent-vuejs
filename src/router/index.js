import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import LandingPage from '@/views/LandingPage.vue'
import MobilDetail from '@/views/MobilDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
    meta: {
      title: 'Rental Mobil Terpercaya | Carrent'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginPage.vue'),
    meta: {
      title: 'Masuk | Carrent',
      requiresVisitor: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/RegisterPage.vue'),
    meta: {
      title: 'Daftar | Carrent',
      requiresVisitor: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/auth/Logout.vue')
  },
  {
    path: '/list-car',
    name: 'Car List',
    component: () => import('@/views/ListCar.vue'),
    meta: {
      title: 'List Car | Carrent'
    }
  },
  {
    path: '/admin-page',
    name: 'Admin',
    component: () => import('@/views/AdminPage.vue'),
    meta: {
      title: 'Admin Page | Carrent'
    }
  },
  {
    path: '/user/:idUser',
    name: 'User Detail',
    component: () => import('@/views/UserDetail.vue'),
    meta: {
      title: 'User Detail | Carrent'
    }
  },
  {
    path: '/user/:idUser/order-status',
    name: 'Order Status',
    component: () => import('@/views/OrderStatus.vue'),
    meta: {
      title: 'Order Status | Carrent'
    }
  },
  {
    path: '/user/:idUser/history',
    name: 'History',
    component: () => import('@/views/History.vue'),
    meta: {
      title: 'History | Carrent'
    }
  },
  {
    path: '/user/:idUser/checkout',
    name: 'Checkout',
    component: () => import('@/views/Checkout.vue'),
    meta: {
      title: 'Checkout | Carrent',
      requiresAuth: true
    }
  },
  {
    path: '/:idRentaler',
    name: 'Rentaler Detail',
    component: () => import('@/views/RentalerDetail.vue'),
    meta: {
      title: 'Rentaler Detail | Carrent'
    }
  },
  {
    path: '/:idRentaler/add-car',
    name: 'Tambah Mobil',
    component: () => import('@/views/AddCar.vue'),
    meta: {
      title: 'Tambah Mobil | Carrent'
    }
  },
  {
    path: '/:idRentaler/:idMobil',
    name: 'Mobil Detail',
    component: MobilDetail,
    meta: {
      title: 'Mobil Detail | Carrent'
    }
  },
  {
    path: '*',
    name: 'Page Not Found',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      title: 'Halaman Tidak Ditemukan | Carrent'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLogin) next({ name: 'Login' })
  else next()
  if (to.matched.some(record => record.meta.requiresVisitor) && store.getters.isLogin) next({ name: 'Landing Page' })
  else next()
})

export default router
