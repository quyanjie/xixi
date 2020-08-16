<template>
  <!-- 内容 -->
  <div  style="height: 100%">
    <el-row>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <h2 class="sub-header">Sports Charts V3</h2>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-button class="sub-header" type="primary" v-show="show" @click="qieh">查看表格</el-button>
          <el-button class="sub-header" type="primary" v-show="!show" @click="qhuan">查看图表</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 查看echarts -->
    <div>
      <el-row>
        <el-col :span="6" v-show="true">
          <div class="grid-content bg-purple">
            <el-select v-model="userId" placeholder="请选择">
              <el-option
                v-for="item in users"
                :key="item.id"
                :label="item.nick"
                :value="item.id"
                @change="getAllList()"
              ></el-option>
            </el-select>
          </div>
        </el-col>

        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="getAllList()"
            ></el-date-picker>
          </div>
        </el-col>

        <el-col :span="7" v-show="true">
          <div class="grid-content bg-purple">
            <el-select v-model="yearMonth" placeholder="请选择">
              <el-option
                v-for="itemr in yearMonths"
                :key="itemr.id"
                :label="itemr.month"
                :value="itemr.id"
                @change="getAllList()"
              ></el-option>
            </el-select>
          </div>
        </el-col>

        <el-col :span="2">
          <div class="grid-content bg-purple-light">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- <div>
      <select v-model="userId" v-change="getAllList()" style="width: 120px">
        <option v-for="u in users" v-bind:value="u.id">{{u.nick}}</option>
      </select>
      <select v-model="yearMonth" v-change="getAllList()" style="width: 120px">
        <option v-for="ym in yearMonths" v-bind:value="ym">{{ym}}</option>
      </select>
      </div>-->
      <div v-show="show" id="echartsDiv" style="height: 760px;width: 100%"></div>
    </div>
    <!-- 查看tables -->
    <div v-show="!show">
      <el-table :data="list" stripe style="width: 100%" border v-loading="loading">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="happenTime" label="日期"></el-table-column>
        <el-table-column prop="reachAmount" label="步数"></el-table-column>
        <!-- <el-table-column prop="address" label="操作"></el-table-column> -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" plain></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
//引入axios,表格需要数据，所以在list中引用
// import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      // tableData: [],
      value1: [],
      show: true,
      list: [],
      myChart: null,
      users: [
        { id: 1, nick: "李明" },
        { id: 2, nick: "YJ" },
        { id: 23, nick: "知足是福" },
        { id: 25, nick: "阿冷" },
        { id: 26, nick: "阿管" },
        { id: 27, nick: "阿力" }
      ],
      userId: 1,
      yearMonth: "all",
      yearMonths: [
        // { id: "all", month: "全部" },
        // { id: "202001", month: "202001" },
        // { id: "202005", month: "202005" },
        // { id: "202006", month: "202006" },
        // { id: "202007", month: "202007" }
      ]
    };
  },
  methods: {
    // 加载运动列表
    //  async loadData() {
    //     console.log(111);
    //   const res = await this.$http.get('matter_log/list?userId=2&mType=3', {
    //     // params: {
    //     //  userId = this.userId,
    //     //   mType = this. mType,
    //     //   partitionValue = this. partitionValue,
    //     //    happenTimeStart= this. happenTimeStart,
    //     //     happenTimeEnd = this.happenTimeEnd
    //     // }
    //   });
    //   this.loading = false;
    //     console.log('res:',res)
    //   if (res.data.meta.status === 200) {
    //     console.log('res.data:',res.data)
    //     this.tableData = res.data.data;
    //   }
    // },

    // 表格數據
    // getAllTable() {
    //   this.$http.get("matter_log/list?userId=2&mType=3").then(data => {
    //     var { status, data } = data;
    //     if (status === 200) {
    //       this.list = data.data;
    //     }
    //   });
    // },
    qieh() {
      this.show = !this.show;

    },
    qhuan() {
      this.show = !this.show;

    },
    draw() {
      // console.log("abc上");
      this.myChart = this.$echarts.init(document.getElementById("echartsDiv"));
      // console.log("abc下");
      // console.log('myChart: ', myChart)
      // 指定图表的配置项和数据
      let dates = new Array();
      let steps = new Array();
      for (let i = 0; i < this.list.length; i++) {
        dates.push(this.list[i].happenDate);
        steps.push(this.list[i].reachAmount);
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
      // console.log("this.value1:", this.value1);
      // console.log("this.value1[0]:", this.value1[0]);
      let url = "matter_log/list?mType=3&userId=" + this.userId;
      // console.log("yearMonth: ", this.yearMonth);
      if (this.yearMonth != "all") {
        url += "&partitionValue=" + this.yearMonth;
      }
      if (this.value1 && this.value1[0]) {
        // console.log("jin lai if");
        url = url + "&happenTimeStart=" + Number(this.value1[0]);
        // .var timestamp2 = (new Date()).valueOf();查百度给出的解决方法
        // var value1[0] = (this.value1[0]).valueOf(); 我写成这个样子
        //  url = url + "&happenTimeStart=" +(this.value1[0]).valueOf() ; 正确写法
      }
      if (this.value1 && this.value1[1]) {
        url += "&happenTimeEnd=" + this.value1[1].getTime();
      }
      // if (this.yearMonths.value === 13) {
      //   url = "matter_log/list?mType=3&userId=" + this.userId;
      // }

      this.$http.get(url).then(data => {
        var { status, data } = data;
        if (status === 200) {
          this.list = data.data;
          // console.log("this.value1:", this.value1);
          // console.log(data);
          // console.log("list lala:", this.list);
          this.list.reverse();
          this.draw();
        }
      });
    },
    // 自动更新时间
    initVar() {
      var date = new Date();
      // let formatDate = this.$echarts.format.formatTime('yyyyMM', date);
      // console.log('formatDate: ', formatDate)
      this.yearMonths.push({ id: "all", month: "全部" });
      // 循环遍历时间，遍历多少次，就是可以查询多少个月
      for (let i = 0; i < 12; i++) {
        var date2 = new Date();
        // 每循环一次，时间比上一个月少1个月，一直推到24个月之前的时间
        date2.setMonth(date.getMonth() - i);
        var tempYm = this.$echarts.format.formatTime("yyyyMM", date2);
        this.yearMonths.push({ id: tempYm, month: tempYm });
      }
      console.log("yearMonths: ", this.yearMonths);
    }
  },
  mounted() {
    // this.draw();
    this.initVar();
    this.getAllList();
    // this.loadData();
    // console.log('users', this.users)
  }
};
</script>

<style>
</style>
