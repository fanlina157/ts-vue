import Vue from 'vue'
import vuex from 'vuex'
import ActionHelper from './ActionHelper'
Vue.use(vuex)
const store = new vuex.Store({
  state:{
    Ahelper:new ActionHelper()
  },
  mutations:{},
  getters:{},
  actions:{}
})

export default store