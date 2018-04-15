<template>
  <div>
    <h2>Comments</h2>
    <input type="text" placeholder="name" v-model="author">
    <textarea placeholder="comment" cols="30" rows="10" v-model="comment"></textarea>
    <button v-on:click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'CommentField',
  data() {
    return {
      author: '',
      comment: '',
    };
  },
  methods: {
    submit() {
      this.$emit('addComment', {
        author: this.author,
        comment: this.comment,
      });
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
