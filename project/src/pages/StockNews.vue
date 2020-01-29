<template>
  <b-container>
    <b-row cols="12">
      <b-col>
        <b-card title="Stock Market News" tag="article" class="mb-2"></b-card>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col>
        <b-card title="Latest Headlines" tag="article" class="mb-2">
          <Article v-for="article of articles" :key="article.id"></Article>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Article from "../components/Article";
import { mapState } from "vuex";

export default {
  name: "VueDemo",
  props: {},
  components: {
    Article
  },
  computed: mapState({
    articles: state => state.articles.articles
  }),
  created() {
    this.$store.dispatch("articles/getArticles");
  }
};
</script>
