<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      测试element el-select组件的测试项目代码
      <el-select v-model="select">
        
      </el-select>
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  watch:{
    select:{
      deep:true,
      handler: function(val){
        console.log('对选择框里的值进行监听',val)
      }
    }
  },
  data(){
    return {
      select:[],//搜索框监听值
      options:[
        {
          lable:'哈哈哈',
          value:'选项1'
        },
         {
          lable:'呵呵呵',
          value:'选项2'
        },
        {
          lable:'嘿嘿嘿',
          value:'选项3'
        }
      ],
      test:undefined
    }
  },
  props: {
    msg: String
  },
  mounted(){
    
  },
  methods:{
    handleChange(val){
      console.log('选中值回调函数被调用')
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
