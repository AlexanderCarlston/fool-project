<template>
  <b-container class="container" fluid>
    <b-row cols="12">
      <b-col>
        <b-card tag="article" class="mb-2">
          <h1>Stock Market News</h1>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="9">
        <b-card title="Latest Headlines" tag="article" class="mb-2">
          <Article v-for="article of articles" :key="article.uuid" :article="article"></Article>
        </b-card>
      </b-col>
      <b-col class="padding-left-0">
        <InfoCard></InfoCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Article from "../components/Article";
import InfoCard from"../components/InfoCard";
import { mapState } from "vuex";

export default {
  name: "VueDemo",
  props: {},
  components: {
    Article,
    InfoCard
  },
  computed: mapState({
    articles: state => state.articles.articles
  }),
  created() {
    this.$store.dispatch("articles/getArticles");
  }
};
</script>

<style scoped>
@media (max-width: 978px) {
    .container {
      padding:0;
      margin:0;
    }

    body {
      padding:0;
    }
}

.padding-left-0 {
  padding-left: 0;
}
</style>