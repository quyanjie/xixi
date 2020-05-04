<template>
  <!-- 内容 -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <router-link to="/add" class="btn btn-success">Add</router-link>  
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in list" :key="item.id">
          <tr>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
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
    getAllList() {
       this.$http.get("/heros").then(data => {
        var { status, data } = data;
        if (status === 200) {
          this.list = data;
        }
      });
    },
    del(id){
      if(confirm('您确定要删除吗？')){
         this.$http.delete(`/heros/${id}`)
         .then(data=> {
           if (data.status === 200) {
             this.getAllList()
           }
         })
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