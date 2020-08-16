<template>
  <!-- 内容 -->
  <div  style="height: 100%">
    <h2 class="sub-header">Sports Charts V2</h2>
    <div>
      <select v-model="userId" v-change="getAllList()" style="width: 120px">
        <option v-for="u in users" v-bind:value="u.id">{{u.nick}}</option>
      </select>
      <select v-model="yearMonth" v-change="getAllList()" style="width: 120px">
        <option v-for="ym in yearMonths" v-bind:value="ym">{{ym}}</option>
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
        myChart: null,
        users: [
          {id: 1, nick: '李明'},
          {id: 2, nick: 'YJ'},
          {id: 23, nick: '知足是福'},
          {id: 25, nick: '阿冷'},
          {id: 26, nick: '阿管'},
          {id: 27, nick: '阿力'}
        ],
        userId: 1,
        yearMonth: '202006',
        yearMonths: []
      };
    },
    methods: {
      draw() {
        // console.log("abc上");
        this.myChart = this.$echarts.init(document.getElementById("echartsDiv"));
        // console.log("abc下");
        // console.log('myChart: ', myChart)
        // 指定图表的配置项和数据
        let dates = new Array()
        let steps = new Array()
        for (let i = 0; i < this.list.length; i++) {
          dates.push(this.list[i].happenDate)
          steps.push(this.list[i].reachAmount)
        }
        // console.log('dates', dates)
        // console.log('steps', steps)
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
        // console.log("setOption(option)下");
        // console.log("option:", option);
      },
      getAllList() {
        let url = "matter_log/list?mType=3&userId=" + this.userId + "&partitionValue=" + this.yearMonth;
        this.$http.get(url).then(data => {
          var {status, data} = data;
          if (status === 200) {
            this.list = data.data;
            console.log('list lala:', this.list)
            this.list.reverse()
            this.draw();
          }
        });
      },
      initVar() {
        var date = new Date();
        // let formatDate = this.$echarts.format.formatTime('yyyyMM', date);
        // console.log('formatDate: ', formatDate)
        for (let i = 0; i < 18; i++) {
          var date2 = new Date()
          date2.setMonth(date.getMonth() - i)
          this.yearMonths.push(this.$echarts.format.formatTime('yyyyMM', date2));
        }
        console.log('yearMonths: ', this.yearMonths)
      }
    },
    mounted() {
      // this.draw();
      this.initVar();
      this.getAllList();
      // console.log('users', this.users)
    }
  }
  

</script>

<style>
</style>
