<template>
  <b-card
    :title="article.headline"
    tag="article"
    img-alt="Card image"
    img-left
    class="mb-3 card-image"
    :img-src="encodeUrl(article.images[0].url)"
  >
    <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
  methods: {
    encodeUrl: function(url) {
      return `https://g.foolcdn.com/image/?url=${encodeURIComponent(url)}&w=479&h=281&op=resize`
    }
  }
};
</script>

<style scoped>
h4 {
  color: #369
}
</style>