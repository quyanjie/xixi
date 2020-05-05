<template>
  <!-- 内容 -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">订单列表</h2>
    <!-- <router-link to="/add" class="btn btn-success">Add</router-link> -->
    <button @click="getOrdersList(1)">待支付</button>
    <button @click="getOrdersList(2)">已支付</button>
    <button @click="getOrdersList(3)">已发货</button>
    <button @click="getOrdersList(4)">已签收</button>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>商品图片</th>
            <th>商品单价（元）</th>
            <th>商品数量</th>
            <th>商品总价（元）</th>
            <th>订单状态</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody v-for="item in list" :key="item.id">
          <tr>
            <!-- <td>{{item.cid}}</td> -->
            <td>{{item.orderNo}}</td>
            <td>{{getOneGoodsFromList(item.cid).commodityName}}</td>
            <td>
              <img :src="getOneGoodsFromList(item.cid).imgs" class="img" />
            </td>
            <td>{{getOneGoodsFromList(item.cid).price / 100}}</td>
            <td>{{item.num}}</td>
            <td>{{item.price / 100}}</td>
            <td>{{item.ostatus == 1 ? "待支付":item.ostatus == 2 ? "已支付" :item.ostatus == 3 ? "已发货" :"已签收"}}</td>
            <td>
              <!-- <router-link :to="'/edit/'+item.id">修改</router-link> -->
              <!-- <router-link :to="'/order/'+item.id">下单</router-link> -->
              <!-- <router-link :to="{name:'order',params:{itemAbc:item}}">下单</router-link> -->
              <a href="#" @click="del(item.id)">删除订单</a>
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
      },
      params: {},
      goodsList: []
    };
  },
  methods: {
    // 表格數據
    getOrdersList(oStatus) {
      var url = "/order/list";
      if(oStatus){
          url =  "/order/list?oStatus=" + oStatus
      }
      var token = "abc123";
      this.$http.defaults.headers.common["token"] = token;
      this.$http
        .get( url, this.paramsAbc)
        .then(data => {
          var { status, data } = data;
          if (status === 200) {
            this.list = data.data;
            // this.list = data.data.list;
          }
        });
    },
    // 表格數據
    getGoodsList(params) {
      this.$http.post("commodity/list", this.paramsAbc).then(data => {
        var { status, data } = data;
        if (status === 200) {
          this.goodsList = data.data.list.reverse();
          // this.list = data.data.list;
        }
      });
    },
    getOneGoodsFromList(cid) {
      for (var i = 0; i < this.goodsList.length; i++) {
        if (this.goodsList[i].id === cid) {
          return this.goodsList[i];
        }
      }
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
      if (confirm("您确定要删除订单吗？")) {
        this.$http.delete(`/heros/${id}`).then(data => {
          if (data.status === 200) {
            this.getAllList();
          }
        });
      }
    }
  },
  mounted() {
    // this.item = this.$route.params.itemAbc;
    this.getOrdersList();
    this.getGoodsList(this.params);
  }
};
</script>

<style>
.img {
  width: 80px;
  height: 80px;
}
</style>