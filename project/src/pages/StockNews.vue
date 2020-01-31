<template>
  <b-container>
    <b-row cols="12">
      <b-col>
        <b-card tag="article" class="mb-2">
          <h1>Stock Market News</h1>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="9">
        <b-card title="Latest Headlines" tag="article" class="mb-2">
          <Article v-for="article of articles" :key="article.uuid" :article="article"></Article>
        </b-card>
      </b-col>
      <b-col>
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