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
        <!-- <input type="number" v-model="num" v-on:input="myFunction()" /> -->
        <input type="number" v-model="num" v-on:input="myFunction2()" />
      </div>
      <div class="fontdiv2">
        <label>合计:</label>
        <!-- <label>￥{{num * goods.price * discount/100}}(元)</label> -->
        <label>￥{{totalPrice}}(元)</label>
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
      submitOrderObj: {},
      // 折扣默认为1,就是不打折，数量等于或者超过三件的时候，开始打折，操作此变量的值为0.8
      discount: 1,
      // 默认订单总金额为一件商品的单价，但是不能在此计算，需要在mounted里计算，数据加载顺序不同的原因，
      totalPrice: 0
    };
  },
  methods: {
    myFunction() {
      if (this.num >= 3) {
        this.discount = 0.8;
      }
    },
    myFunction2() {
      // 默认不打折
      this.totalPrice = (this.num * this.goods.price) / 100;
      // 数量大于等于三的时候，开始打折
      if (this.num >= 3) {
        this.totalPrice = ((this.num * this.goods.price) / 100) * 0.8;
      }
    },
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
          this.$router.push({
            name: "paymentDetails",
            params: { goodsPay: this.goods, num: this.num }
          });
        }
      });
    }
  },
  mounted() {
    this.goods = this.$route.params.itemAbc;
    console.log("this.goods", this.goods);
    // 这里容易忽略的地方，初始计算的地方，当页面加载完成的时候，不写在这里，totalprice就是0，
    // 因为this.goods = this.$route.params.itemAbc;还没有加载到这里，上面代码无法实现。
    this.totalPrice = (this.num * this.goods.price) / 100;
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