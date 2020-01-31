<template>
  <b-container class="article-container">
    <b-row>
      <b-col class="article-img" cols="3">
        <b-img-lazy :src="encodeUrl(article.images[0].url)" alt="Article Image"></b-img-lazy>
      </b-col>
      <b-col cols="9">
        <a :href="'https://www.fool.com' + article.path" target="_blank">
          <h4>{{article.headline}}</h4>
        </a>
        <span class="story-date-author">{{ article.byline }}</span>
        <b-card-text>{{article.promo}}</b-card-text>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
  methods: {
    encodeUrl: function(url) {
      return `https://g.foolcdn.com/image/?url=${encodeURIComponent(
        url
      )}&w=479&h=281&op=resize`;
    },
  }
};
</script>

<style scoped>
h4 {
  color: #369;
  margin-bottom: 0;
}

img {
  max-width: 100%;
  height: 100%;
}

.article-img {
  padding-left: 0;
  max-height: 120px;
}

.article-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

a {
  text-decoration: none !important;
}

h4:hover {
  color: #0a2c3a !important;
}

.story-date-author {
  font-size: 13px;
  color: #666;
}
</style>