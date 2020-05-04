<template>
  <!-- 内容 -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Sports List</h2>
    <router-link to="/add" class="btn btn-success">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>日期</th>
            <th>步數</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in list" :key="item.id">
          <tr>
            <td>{{item.id}}</td>
            <td>mary</td>
            <td>女</td>
            <td>{{item.happenDate}}</td>
            <td>{{item.reachAmount}}</td>
            <td>
              <router-link :to="'/edit/'+item.id">修改</router-link>
              <a href="#" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
//引入axios,表格需要数据，所以在list中引用
// import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    // 表格數據
    getAllList() {
      this.$http.get("matter_log/list?userId=2&mType=3").then(data => {
        var { status, data } = data;
        if (status === 200) {
          this.list = data.data;
        }
      });
    },

    // 图表数据
    // getChartData(params) {
    //   this.$http.get("matter_log/list?userId=2&mType=3").then(res => {
    //     var data = res.data.data;
    //     this.drawLine(data.x, data.y);
    //     console.log(res, "报表数据------数据--ppp");
    //   });
    // },
    del(id) {
      if (confirm("您确定要删除吗？")) {
        this.$http.delete(`/heros/${id}`).then(data => {
          if (data.status === 200) {
            this.getAllList();
          }
        });
      }
    }
  },
  mounted() {
    this.getAllList();
  }
};
</script>

<style>
</style>