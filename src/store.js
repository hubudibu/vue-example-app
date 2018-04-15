import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    addComment(state, comment) {
      state.comments.unshift(comment);
    },
  },
  actions: {
    addComment(context, comment) {
      context.commit('addComment', comment);
    },
  },
});

export default store;
