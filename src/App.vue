<template>
  <div id="app">
    <div id="nav">
      <router-link class="left" to="/">Home</router-link> &nbsp; |
      <router-link class="search" to="/search">&nbsp; Search</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  background-color: black;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #f2f2f3;
}

#nav a.router-link-exact-active {
  color: #400eca;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
}
</style>
