<template>
    <div class="container">
        <div class="nav-container">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="charts-container">
            <div class="charts-title">
                <div class="title-left">
                    月报统计
                </div>
                <div class="title-right">到处数据报告</div>
            </div>
            <el-row>
                <el-col :span="8">
                    <el-card class="box-card" shadow="never">
                        <div id="dashboard-1"></div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="box-card" shadow="never">
                        <div id="dashboard-2"></div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="box-card" shadow="never">
                        <div id="dashboard-3"></div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="5">
                <el-col :span="12">
                    <el-card shadow="never"><div id="dashboard-4"></div></el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="never"><div id="dashboard-5"></div></el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        handleOpen(){
            console.log('打开')
        },
        handleClose(){
            console.log('关闭')
        },
        initEcharts(){
            let dashboard1 = this.$echarts.init(document.getElementById('dashboard-1'))
            let dashboard2 = this.$echarts.init(document.getElementById('dashboard-2'))
            let dashboard3 = this.$echarts.init(document.getElementById('dashboard-3')) 
            //let dashboard4 = this.$echarts.init(document.getElementById('dashboard-4')) 
            //let dashboard5 = this.$echarts.init(document.getElementById('dashboard-5')) 
            let option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: {formatter:'{value}%'},
                        data: [{value: 50, name: '完成率'}]
                    }
                ]
            }//option结束
            //折线图表的配置
            /*
            let zoption = {
                title: {
                    text: 'Beijing AQI'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: data.map(function (item) {
                        return item[0];
                    })
                },
                yAxis: {
                    splitLine: {
                        show: false
                    }
                },
                toolbox: {
                    left: 'center',
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: [{
                    startValue: '2014-06-01'
                }, {
                    type: 'inside'
                }],
                visualMap: {
                    top: 10,
                    right: 10,
                    pieces: [{
                        gt: 0,
                        lte: 50,
                        color: '#096'
                    }, {
                        gt: 50,
                        lte: 100,
                        color: '#ffde33'
                    }, {
                        gt: 100,
                        lte: 150,
                        color: '#ff9933'
                    }, {
                        gt: 150,
                        lte: 200,
                        color: '#cc0033'
                    }, {
                        gt: 200,
                        lte: 300,
                        color: '#660099'
                    }, {
                        gt: 300,
                        color: '#7e0023'
                    }],
                    outOfRange: {
                        color: '#999'
                    }
                },
                series: {
                    name: 'Beijing AQI',
                    type: 'line',
                    data: data.map(function (item) {
                        return item[1];
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 50
                        }, {
                            yAxis: 100
                        }, {
                            yAxis: 150
                        }, {
                            yAxis: 200
                        }, {
                            yAxis: 300
                        }]
                    }
                }
            }*/
            setInterval(function () {
                option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                dashboard1.setOption(option, true);
                option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                dashboard2.setOption(option, true);
                option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                dashboard3.setOption(option, true);
                //4 和 5 折线表

                //dashboard4.setOption(zoption, true);
                //dashboard5.setOption(zoption, true);
            },2000);
        },//echarts初始化结束
        showWidth(){
            let dashboard1 = document.getElementById('dashboard-1')
            dashboard1.style.height = dashboard1.offsetWidth - 5 + 'px'
            //高度的设置应该是以宽度为准的，计算出宽度然后去赋值高度；
            //用clientheight需要减去设置的margin值和padding值
            let dashboard2 = document.getElementById('dashboard-2')
            dashboard2.style.height = dashboard1.offsetWidth - 5 + 'px'
            let dashboard3 = document.getElementById('dashboard-3')
            dashboard3.style.height = dashboard1.offsetWidth - 5 + 'px'

            let dashboard4 = document.getElementById('dashboard-4')
            dashboard4.style.height = dashboard1.offsetWidth - 5 + 'px'
            let dashboard5 = document.getElementById('dashboard-5')
            dashboard5.style.height = dashboard1.offsetWidth - 5 + 'px'
        }
    },
    mounted(){
        //mounted的时候初始化echarts；实际引入数据后数据是后台过来的，所以数据是先computed出来，然后再去渲染
        this.showWidth()
        this.initEcharts()
    }//mounted结束
}
</script>
<style>
/*设置一下html 和body的高度*/
*{
    padding: 0px;
    margin: 0px;
}
html{
    height: 100%;
}
body{
    height: 100%;
    background-color: #f5f5f5;
}
.container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    padding-right: 15px;
}
.nav-container {
    width: 10%;
    /*会有让导航栏里的文字做对齐的问题*/
    height: 100%;
    background-color: #545c64;
}
.charts-container {
    width: calc(90% - 15px);
    margin-left: 15px;
    height: 100%;
}
.nav-container .el-menu {
    border-right:none;
}
/*设置el-card大小的css*/
.el-col .el-card {
    border:none;
    margin-top: 5px;
    border-radius: 0px;
}
.el-card .el-card__body{
    padding: 0px;
}
.charts-title{
    padding:15px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    margin-top: 20px;
}

/*父盒子设置了flex 子盒子的长度就从100%变成了适应它自己内部的content了*/
</style>