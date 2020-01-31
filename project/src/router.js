import Vue from 'vue'
import Router from 'vue-router'
import StockNews from './pages/StockNews'
import NotFound from './pages/NotFound'
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
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    },
  ]
})
