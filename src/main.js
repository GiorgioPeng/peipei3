import Vue from 'vue'
import App from './App.vue'
import router from "./router"

// 引入样式
import './assets/css/base.css'

// store
import store from "./store/index.js"
// Vue.use(store)


// 引入vant组件
import { Button, Field, CellGroup, ActionSheet, RadioGroup, Radio, Slider, DatetimePicker,Popup,Picker,Icon } from 'vant';

Vue.use(Button)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(ActionSheet)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Slider)
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
