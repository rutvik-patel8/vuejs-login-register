import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'admin',
    password: 'admin123',
  },
  getters: {
    getCredentials: state => {
      return [state.username,state.password]
    }
  },
  mutations: {
    setCredentials(state,payload){
        state.username = payload[0]
        state.password = payload[1]
        localStorage.setItem('username',state.username)
        localStorage.setItem('password',state.password)
    }
  },
  actions: {
      async login(){
       const uname = localStorage.getItem('username')
       const pass = localStorage.getItem('password')
       return [uname,pass]
      },

  },

})
