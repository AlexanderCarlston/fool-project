import Vue from 'vue'
import Router from 'vue-router'
import StockNews from './pages/StockNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: StockNews
    },
  ]
})
