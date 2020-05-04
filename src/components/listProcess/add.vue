<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
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
      <button type="submit" class="btn btn-success" @click.prevent="add">新增</button>
    </form>
  </div>
</template>

<script>
//导入axios
// import axios from 'axios'
export default {
  data() {
    return{
      obj:{
        name:'',
        gender:'男'
      }
    }
  },
  methods:{
    add(){
      this.$http.post('/heros',this.obj)
      .then(data => {
        if(data.status === 201){
          this.$router.push('./list')
        }
      })
    }
    }
};
</script>

<style>
</style>