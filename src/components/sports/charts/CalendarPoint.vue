<template>
  <!-- 内容 -->
  <!--<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">-->
    <!--&lt;!&ndash;<h2 class="sub-header">Sports Charts CalendarPoint</h2>&ndash;&gt;-->
    <!--<div id="echartsDiv" style="height: 800px;"></div>-->
  <!--</div>-->
  <div >
    <h2 >Sports Charts CalendarPoint</h2>
    <div id="echartsDiv" style="height: 800px;background-color: bisque"></div>
  </div>
</template>
<script>
  //引入axios,表格需要数据，所以在list中引用
  // import axios from "axios";

  //控制点大小的分母
  const symbolSizeDenominator = 500;

  export default {
    data() {
      return {
        list: [],
        myChart: null,
        users: [
          {id: 1, nick: '李明宝贝哈哈哈 `'},
          {id: 2, nick: 'YJ宝贝哈哈哈'},
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
        let stepData = [];
        for (let i = 0; i < this.list.length; i++) {
          stepData.push([this.list[i].happenDate, this.list[i].reachAmount])
        }
        console.log('stepData: ', stepData)
        // console.log('dates', dates)
        // console.log('steps', steps)
        var option = {        //加载数据图表
          title: {
            top: 30,
            text: '2020年「李明」每天的步数',
            subtext: '运动🏃',
            left: 'center',
            textStyle: {
              color: '#000aff'
            }
          },
          series: [
            {
              name: '步数',
              type: 'scatter',
              coordinateSystem: 'calendar',
              data: stepData,
              // 控制点的大小
              symbolSize: function (val) {
                return val[1] / symbolSizeDenominator;
              },
              itemStyle: {
                color: '#ddb926'
              }
            },
            {
              name: '步数',
              type: 'scatter',
              coordinateSystem: 'calendar',
              calendarIndex: 1,
              data: stepData,
              symbolSize: function (val) {
                return val[1] / symbolSizeDenominator;
              },
              itemStyle: {
                color: '#ddb926'
              }
            },
            {
              name: 'Top 12',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              calendarIndex: 1,
              data: stepData.sort(function (a, b) {
                return b[1] - a[1];
              }).slice(0, 12),
              symbolSize: function (val) {
                return val[1] / symbolSizeDenominator;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: '#f4e925',
                // shadowBlur: 10,
                shadowBlur: 1,
                shadowColor: '#333'
              },
              zlevel: 1
            },
            {
              name: 'Top 12',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: stepData.sort(function (a, b) {
                return b[1] - a[1];
              }).slice(0, 12),
              symbolSize: function (val) {
                return val[1] / symbolSizeDenominator;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: '#f4e925',
                // shadowBlur: 10,
                shadowBlur: 1,
                shadowColor: '#333'
              },
              zlevel: 1
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option, true);
        // console.log("setOption(option)下");
        // console.log("option:", option);
      },
      getAllList() {
        let url = "matter_log/list?mType=3&userId=" + this.userId;
        this.$http.get(url).then(data => {
          var {status, data} = data;
          if (status === 200) {
            this.list = data.data;
            console.log('list point:', this.list)
            // this.list.reverse()
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
  };
</script>

<style>
</style>
