<template>
  <div class="about">
    <form @submit.prevent="setCredentials">
    <div class="container">
    <h1>Register</h1>

    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="username" name="username" id="username" v-model="registerUsername" required>

    <label for="pssword"><b>Password</b></label>
    <input type="password" placeholder="password" name="password" id="password" v-model="registerPassword" required>

    <button type="submit" class="form-btn">Register</button>
  </div>

</form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerUsername : '',
      registerPassword : ''
    }
  },
  methods: {
    setCredentials(){
      const values = [this.registerUsername, this.registerPassword]
      this.$store.commit('setCredentials',values)
      const result = this.$store.getters.getCredentials;
      console.log(result)
      this.$router.push({ name: 'welcome' })
      this.$store.commit('changeLoggedStatus',false)
    }
  },
}
</script>

<style scoped>
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