import api from '@/services/api'

export default {
  fetchArticles() {
    return api.get(`articles/`)
      .then(response => response.data.results)
  },
}