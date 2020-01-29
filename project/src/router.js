import Vue from 'vue'
import Router from 'vue-router'
import StockNews from './pages/StockNews'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/stock-news'
    },
    {
      path: '/stock-news',
      name: 'home',
      component: StockNews
    },
  ]
})
