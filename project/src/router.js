import Vue from 'vue'
import Router from 'vue-router'
import StockNews from './pages/StockNews'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/stock-market-news'
    },
    {
      path: '/stock-market-news',
      name: 'home',
      component: StockNews
    },
  ]
})
