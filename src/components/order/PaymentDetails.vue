<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">订单详情</h2>
    <form>
      <div class="fontdiv2">
        <label>￥{{num * goods.price * discount/100 }}(元)</label>
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="payment">立即付款</button>
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
      discount:1
    };
  },
  methods: {
    payment() {
     alert('支付成功')
    //  this.$router.push({ name: 'allOrders', params: { itemAbc: this.goods}});
    }
  },
  mounted() {
    this.discount = this.$route.params.discount
    this.goods = this.$route.params.goodsPay;
    this.num = this.$route.params.num;
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