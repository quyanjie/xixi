<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">确认订单</h2>
    <form>
      <div class="form-group">
        <img :src="goods.imgs" class="img2" />
      </div>
      <div class="fontdiv">
        <label>{{goods.commodityName}}</label>
      </div>
      <div class="fontdiv1">
        <label>￥{{goods.price / 100 }}(元)</label>
      </div>
      <div class="fontdiv2">
        <label>购买数量:</label>
        <input type="number" v-model="num" />
      </div>
      <div class="fontdiv2">
        <label>合计:</label>
        <label>￥{{num * goods.price /100 }}(元)</label>
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="submitOrder">提交订单</button>
    </form>
  </div>
</template>

<script>
//导入axios
// import axios from 'axios'
export default {
  data() {
    return {
      goods: {},
      num: 1,
      submitOrderObj: {}
    };
  },
  methods: {
    submitOrder() {
      this.submitOrderObj.payMoneyTotal = this.num * this.goods.price;
      this.submitOrderObj.cid = this.goods.id;
      this.submitOrderObj.price = this.num * this.goods.price;
      this.submitOrderObj.address = "上海昌平龙锦苑东四区";
      this.submitOrderObj.uid = 2;
      this.submitOrderObj.num = this.num;
      var token = "abc123";
      this.$http.defaults.headers.common["token"] = token;

      this.$http.post("/order/submit", this.submitOrderObj).then(data => {
        if (data.status === 201 || data.status === 200) {
          // this.$router.push({ path: "./order/PaymentDetails" });
          console.log("submitOrder");
          console.log("data:", data);
          this.$router.push({ name: 'paymentDetails', params: { goodsPay: this.goods,num: this.num }});
        }
      });
    }
  },
  mounted() {
    this.goods = this.$route.params.itemAbc;
    console.log("this.goods", this.goods);
  }
};
</script>

<style>
.img2 {
  width: 180px;
  height: 180px;
}
.fontdiv {
  font-size: 24px;
  margin: 20px 0;
}
.fontdiv1 {
  color: red;
  font-size: 24px;
  margin: 20px 0;
}
.fontdiv2 {
  font-size: 22px;
  margin: 20px 0;
}
</style>