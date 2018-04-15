<template>
  <div id="app">
    <img src="./assets/logo.png">
    <CommentedArticle />
  </div>
</template>

<script>
import CommentedArticle from './components/CommentedArticle';

export default {
  name: 'App',
  components: {
    CommentedArticle,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
