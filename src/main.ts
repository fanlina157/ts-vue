import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
Vue.config.productionTip = false

import ItemData from './model/ItemData'
import cateEnum from './model/CateEnum'
import ActionHelper from './store/ActionHelper'


new Vue({
  render: h => h(App),
  store
}).$mount('#app')


// console.log(Date.now().toString())

let ah = new ActionHelper()
let i1 = new ItemData(2,cateEnum.Life, '3','3')
// ah.add(i1)
ah.edit(i1)
// ah.remove(2)




// console.log(i1)
