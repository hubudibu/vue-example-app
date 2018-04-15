<template>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      <h3>{{ comment.author }}</h3>
      <p>{{ comment.comment }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CommentList',
  computed: {
    comments() {
      return this.$store.state.comments;
    },
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
