<template>
  <!-- 内容 -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Sports Charts V2</h2>
    <div>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <div id="echartsDiv" style="height: 760px;width: 100%"></div>
    <button>hello world</button>
  </div>
</template>
<script>
//引入axios,表格需要数据，所以在list中引用
// import axios from "axios";

export default {
  data() {
    return {
      list: [],
      myChart: null
    };
  },
  methods: {
    draw() {
      console.log("abc上");
      this.myChart = this.$echarts.init(document.getElementById("echartsDiv"));
      console.log("abc下");
      // console.log('myChart: ', myChart)
      // 指定图表的配置项和数据
      let dates = new Array();
      let steps = new Array();
      for (let i = 0; i < this.list.length; i++) {
        dates.push(this.list[i].happenDate);
        steps.push(this.list[i].reachAmount);
      }
      console.log("dates", dates);
      console.log("steps", steps);
      var option = {
        xAxis: {
          type: "category",
          data: dates
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: steps,
            type: "bar"
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option, true);
      console.log("setOption(option)下");
      console.log("option:", option);
    },
    getAllList() {
      this.$http.get("matter_log/list?userId=2&mType=3").then(data => {
        var { status, data } = data;
        if (status === 200) {
          this.list = data.data;
          console.log("list", this.list);
          this.list.reverse();
          this.draw();
        }
      });
    }
  },
  mounted() {
    // this.draw();
    this.getAllList();
  }
};
</script>

<style>
</style>
