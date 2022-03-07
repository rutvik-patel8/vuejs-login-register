<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <form @submit.prevent="checkCredentials">
    <div class="container">
    <h1>Login</h1>

    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="admin" name="username" id="username" v-model="loginUsername" required>

    <label for="pssword"><b>Password</b></label>
    <input type="password" placeholder="admin123" name="password" id="password" v-model="loginPassword" required>
    <p v-if="iserror">Wrong Credentials , Please try again!!</p>
    <button type="submit" class="form-btn">Login</button>
  </div>

</form>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      loginUsername : '',
      loginPassword : '',
      iserror: false
    }
  },
  methods: {
    async checkCredentials(){
      // const actionPayload = {
      //   loginUsername: this.loginUsername,
      //   loginPassword: this.loginPassword,
      // };
      const result = await this.$store.dispatch('login');
      //console.log(result);
      if(this.loginUsername == result[0] && this.loginPassword == result[1]){
          this.$store.commit('changeLoggedStatus',false)
          this.$router.push({ name: 'welcome' })
          return console.log("condition true")
      }
      else{
        this.iserror = true
      }

      return console.log("condition false")
    }
  },
}
</script>

<style scoped>
p{
  color:red;
}
.container {
  padding: 16px;
  background-color: white;
}

#username, #password {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  
}

.form-btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  
}
</style>