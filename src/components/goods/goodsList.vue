<template>
  <!-- 内容 -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">商品列表</h2>
    <router-link to="/add" class="btn btn-success">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>商品编号</th>
            <th>购买时间</th>
            <th>商品图片</th>
            <th>商品价格（元）</th>
          </tr>
        </thead>
        <tbody v-for="item in list" :key="item.id">
          <tr>
            <td>{{item.id}}</td>
            <td>{{item.skuNo}}</td>
            <td>{{item.createTime}}</td>
            <td>
              <img :src="item.imgs" class="img" />
            </td>
            <td>{{item.price / 100}}</td>
            <td>
              <!-- <router-link :to="'/edit/'+item.id">修改</router-link> -->
              <!-- <router-link :to="'/order/'+item.id">下单</router-link> -->
              <router-link :to="{name:'order',params:{itemAbc:item}}">下单</router-link>
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
      list: [],
      paramsAbc: {
        pageNo: 1,
        pageSize: 10,
        merchant: null,
        commodityType: null
      }
    };
  },
  methods: {
    // 表格數據
    getGoodsList(params) {
      this.$http.post("commodity/list", this.paramsAbc).then(data => {
        var { status, data } = data;
        if (status === 200) {
          this.list = data.data.list.reverse();
          // this.list = data.data.list;
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
    this.getGoodsList();
  }
};
</script>

<style>
.img {
  width: 80px;
  height: 80px;
}
</style>