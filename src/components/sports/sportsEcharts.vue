<template>
  <div class="main">
    <div>图标📈</div>
    <div id="myChart"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    mounted() {
      this.drawLine();
    },
    methods: {
      draw() {
        console.log("abc上");
        var myChart = echarts.init(document.getElementById("echartsDiv"));
        console.log("abc下");
        console.log('myChart: ', myChart)
        // 指定图表的配置项和数据
        var option = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: "bar"
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option, true);
        console.log("setOption(option)下");
        console.log("option:", option);
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        console.log('drawLine 1')
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  };
</script>
<style>
  #myChart {
    width: 80%;
    height: 80%;
    margin-top: 50px;
  }
</style>
