<template>
  <div class="hello">
    <h1>Animals Riding Animals</h1>
    <p>James Corden egy új szegmenssel jött, amiben a közönségének tagjai csodálatos nyereményekért tippelheti meg, hogy a képen látott állat milyen másik állaton lovagol. A képek is aranyosak, de a felvezetésben is akad pár poén a tovább mögött.</p>
    <h2>Comments</h2>
    <div>
      <input type="text" placeholder="name">
      <textarea placeholder="comment" cols="30" rows="10"></textarea>
      <button>Submit</button>
    </div>
    <ul>
      <li>
        <h3>Michael J Szymanski</h3>
        <p>Interesting article</p>
      </li>
      <li>
        <h3>Cory J Harris</h3>
        <p>Yes</p>
      </li>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
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
