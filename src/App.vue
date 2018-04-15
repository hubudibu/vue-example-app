<template>
  <div id="app">
    <img src="./assets/logo.png">
    <CommentedArticle :title="title" :article="article" />
    <CommentField v-on:addComment="addComment" />
    <CommentList :comments="comments" />
  </div>
</template>

<script>
import CommentedArticle from './components/CommentedArticle';
import CommentField from './components/CommentField';
import CommentList from './components/CommentList';

export default {
  name: 'App',
  components: {
    CommentedArticle,
    CommentField,
    CommentList,
  },
  data() {
    return {
      title: 'Animals Riding Animals',
      article: 'James Corden egy új szegmenssel jött, amiben a közönségének tagjai csodálatos nyereményekért tippelheti meg, hogy a képen látott állat milyen másik állaton lovagol. A képek is aranyosak, de a felvezetésben is akad pár poén a tovább mögött.',
      comments: [
        {
          id: 1,
          author: 'Michael J Szymanski',
          comment: 'Interesting article',
        },
        {
          id: 2,
          author: 'Cory S Harris',
          comment: 'yes',
        },
      ],
    };
  },
  methods: {
    addComment(comment) {
      console.log('ez', comment);
      this.comments.push(comment);
    },
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
