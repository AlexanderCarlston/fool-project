import articlesService from '../../services/articlesService'

const state = {
  articles: []
}

const getters = {
  articles: state => {
    return state.articles
  }
}

const actions = {
  getArticles ({ commit }) {
    articlesService.fetchArticles()
    .then(articles => {
      commit('setArticles', articles)
    })
  },
}

const mutations = {
  setArticles (state, articles) {
    state.articles = articles
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}