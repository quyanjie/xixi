<template>
  <div id="echarts"></div>
</template>
<script>
export default {
  mounted() {
      this.draw();
  },
  methods: {
    draw() {
      console.log("abc上");
      var myChart = this.$echarts.init(document.getElementById("echarts"));
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
    }
  }
};
</script>
<style>
#echarts {
  width: 80%;
  height: 80%;
  margin-top: 50px;
}
</style>