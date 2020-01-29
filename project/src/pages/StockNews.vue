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
            <Article></Article>
            
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Article from "../components/Article";
export default {
  name: "VueDemo",
  props: {},
  components: {
    Article
  }
};
</script>
