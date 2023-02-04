import { createStore } from 'vuex'

export default createStore({
  state: {  
    userData: {},
    token: '',
  },
  getters: {
    // get
    storageToken: state => state.token, 
    storageUserData: state => state.userData
  },
  mutations: {
  },
  actions: {
    // put
    setToken: ({ state }, value) => state.token = value,
    setUserData:({state},value) => state.userData = value,
  },
  modules: {
  }
})
