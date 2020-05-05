<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加商品</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">商品名称</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.commodityName"
          id="exampleInputEmail1"
          placeholder="请输入商品名称"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">商品图片</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.imgs"
          id="exampleInputEmail1"
          placeholder="请输入商品图片"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">商品价格</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.price"
          id="exampleInputEmail1"
          placeholder="请输入商品价格"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">商品标题</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.title"
          id="exampleInputEmail1"
          placeholder="请输入商品标题"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">商品原价</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.originalPrice"
          id="exampleInputEmail1"
          placeholder="请输入商品原价"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">商品库存量</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.stock"
          id="exampleInputEmail1"
          placeholder="请输入商品库存量"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">商家</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.merchant"
          id="exampleInputEmail1"
          placeholder="请输入商家"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">标签</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.tags"
          id="exampleInputEmail1"
          placeholder="请输入商品标签"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">商品类别</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.category"
          id="exampleInputEmail1"
          placeholder="请输入商品类别"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">商品类型</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.commodityType"
          id="exampleInputEmail1"
          placeholder="请输入商品类型"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">商品状态</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.commodityStatus"
          id="exampleInputEmail1"
          placeholder="请输入商品状态"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">商品优惠价格</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.reducedPrice"
          id="exampleInputEmail1"
          placeholder="请输入商品优惠价格"
        />
      </div>

      <button type="submit" class="btn btn-success" @click.prevent="add">新增</button>
    </form>
  </div>
</template>

<script>
//导入axios
// import axios from 'axios'
export default {
  data() {
    return {
      obj: {
        commodityName: "",
        imgs: "",
        price: "",
        title: "",
        originalPrice: 1,
        merchant: 1,
        reducedPrice: 0,
        stock:100
      }
    };
  },
  methods: {
    add() {
      this.$http.post("/commodity", this.obj).then(data => {
        console.log("data:", data);
        if (data.status === 200) {
          if (data.data.code == "2000") {
            alert("添加成功");
          } else {
            alert(data.data.message);
          }
          this.$router.push("./goods/goodsList");
        }
      });
    }
  }
};
</script>

<style>
</style>