import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
    meta: {
      title: 'Rental Mobil Kurang Terpercaya | Carrent'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginPage.vue'),
    meta: {
      title: 'Masuk | Carrent'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/RegisterPage.vue'),
    meta: {
      title: 'Daftar | Carrent'
    }
  },
  {
    path: '/m/list-car',
    name: 'Car List',
    component: () => import('@/views/ListCar.vue'),
    meta: {
      title: 'List Car | Carrent'
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
    name: 'History',
    component: () => import('@/views/Checkout.vue'),
    meta: {
      title: 'Checkout | Carrent'
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
    path: '/:idRentaler/:idMobil',
    name: 'Mobil Detail',
    component: () => import('@/views/MobilDetail.vue'),
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

export default router
