import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'admin',
    password: 'admin123',
    isLoggedIn: true
  },
  getters: {
    getCredentials: state => {
      return [state.username,state.password]
    },
    isLogged: state => {
         console.log(state.isLoggedIn)
        return state.isLoggedIn
    }
  },
  mutations: {
     
    setCredentials(state,payload){
        state.username = payload[0]
        state.password = payload[1]
        localStorage.setItem('username',state.username)
        localStorage.setItem('password',state.password)
    },
    changeLoggedStatus(state,payload){
      state.isLoggedIn = payload
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
