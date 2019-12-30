<template>
  <div id="app">
    <div class="document-container">
      <draggable></draggable>
      <calendar></calendar>
      <div class="long-block">
        <ul>
          <li v-for="(item,index) in list" :key="item" ref="itemLi" :data="item">
            <div>迪斯科飞机第三方就开始</div>
            <el-button @click="callConfirm">{{index}}删除</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from '@/components/draggable.vue'
//import search from '@/components/HelloWorld.vue'
import calendar from '@/components/calendar.vue'

// 引入element ui 的弹窗组件  
export default {
  name: 'app',
  data(){
    return {
      list:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'],
      test:undefined
    }
  },
  components: {
    draggable,
    calendar
  },
  methods:{
    callConfirm(){
      this.$confirm('随便选一个吧？','测试$confirm弹窗',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type:'warning'
      })
      this.confirmHeight()
    },
    confirmHeight(){
      this.$nextTick(()=>{
        const dom = document.getElementsByClassName('el-message-box')[0]
        dom.style.verticalAlign = 'top'
        dom.style.marginTop = `${this.test}px`
      })
    },
    msgParent(e){
      //console.log(window)
      if(e.data.dis){
        this.test = e.data.dis
      }
    }
  },
  mounted(){
    //接收父页面发送过来的消息
    window.addEventListener('message',this.msgParent,false)//子页面监听父页面的消息；
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
.long-block{
  background-color: aqua;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
