<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Edit Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄名称</label>
        <input
          type="text"
          class="form-control"
          v-model="obj.name"
          id="exampleInputEmail1"
          placeholder="请输入英雄名称"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">英雄性别</label>
        <div>
          <input type="radio" name="gender" v-model="obj.gender" value="男" />男&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="gender" v-model="obj.gender" value="女" />女
        </div>
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="edit">修改</button>
    </form>
  </div>
</template>

<script>
//导入axios
// import axios from "axios";
//进入页面时，得到要修改页面的id
export default {
  data() {
    return {
      obj: {},
      id: ""
    };
  },
  methods: {
    getObjById() {
      //得到id
      this.id = this.$route.params.id;
      //根据id得到数据
      this.$http.get(`/heros/${this.id}`).then(data => {
        var{status, data } = data
        //   console.log('data',data)
        if (status === 200) {
          this.obj = data;
        }
      });
    },
    edit(){
       this.$http.put(`/heros/${this.id}`,this.obj)
      .then(data => {
        if(data.status === 200){
          this.$router.push('/list')
        }
      })
    }
  },
  mounted() {
    this.getObjById();
  }
};
</script>

<style>
</style>