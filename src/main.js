import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import的用法 
import echarts from 'echarts'

Vue.prototype.$echarts = echarts //只有这一种引入的办法吗？？

Vue.config.productionTip = false

Vue.use(Element)//这句代码的意思是向vue中引入element ps vue.use的用法

new Vue({
  render: h => h(App),
}).$mount('#app')
