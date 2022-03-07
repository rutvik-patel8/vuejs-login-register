<template>
  <div id="nav" v-if="isLoggedIn">
    <router-link to="/">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  created() {
    const result = this.$store.getters.getCredentials;
    localStorage.setItem('username', result[0]);
    localStorage.setItem('password', result[1]);
  },
  computed:{
     isLoggedIn(){
      return this.$store.getters.isLogged
    }
  }
}
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
