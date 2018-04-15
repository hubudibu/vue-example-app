<template>
  <article>
    <h1>{{ title }}</h1>
    <p>{{ article }}</p>
  </article>
</template>

<script>
export default {
  name: 'CommentedArticle',
  computed: {
    title() {
      return this.$store.state.title;
    },
    article() {
      return this.$store.state.article;
    },
  },
  created() {
    this.$store.dispatch('getArticle');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
input, textarea {
  width: 100%;
  font-size: 16px;
  padding: .5em;
}
</style>
