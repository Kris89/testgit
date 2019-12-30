<template>
<div class="test-draggble">
    <ul>
        <Draggable v-model="mylist" group='people'>
                <li v-for="(item,i) in mylist" :key="item" class="item" ref="dragItem">
                    {{item}}
                    <i class="el-icon-top del" @click="up(i)"></i>
                    <i class="el-icon-bottom del" @click="up(i)"></i>
                </li>
        </Draggable>    
    </ul>
</div>
</template>
<script>
import Draggable from 'vuedraggable' //导入拖拽包

export default {
    components:{
        Draggable
    },
    data(){
        return{
            mylist:['1','2','3','4'],
            drag:true,
            obj:{
                last:undefined
            },//这个数据就是为了清前一次移动设置的样式的；
            item:'teststyle'
        }
    },
    methods:{
        up(i){
            console.log('hello',i)
            const del = this.mylist.splice(i-1,1,this.mylist[i])[0] //把当前item删除并返回保存；
            this.mylist[i] = del;
        },
        down(i){
            console.log(i)
        },
        handleChange(){
            this.obj.last.style.borderTop = 'none';
            this.obj.last.style.borderBottom = 'none';
            this.obj.last = undefined 
        },
        handleMove(e){
            //进来先判定方向
            e.draggedContext.index > e.relatedContext.index ? e.related.style.borderTop = '1px solid red' : e.related.style.borderBottom = '1px solid red'
            if(typeof this.obj.last !== 'undefined'){
                this.obj.last.style.borderTop = 'none';
                this.obj.last.style.borderBottom = 'none';

                this.obj.last = e.related 
            }else{
                this.obj.last = e.related
            }
        }
    },
    mounted(){
       //console.log(this.$refs.dragItem) 
       //返回一个list 
    }
}
</script>
<style>
    
    ul li {
        width: 200px;
        padding:10px 0px;
        background-color: aqua;
    }
    
    ul li:nth-child(1){
        background-color: red;
    }
    ul li:nth-child(2){
        background-color: yellow;
    }
    ul li:nth-child(3){
        background-color:violet;
    }
    
    .item i{
        transition:opacity .5s ease .3s;
        opacity:0;
        border:1px solid #fff;
        border-radius: 50%;
    }
    .item:hover i{
        opacity:1;
    }
</style>