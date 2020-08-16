<template>
  <div id="app">
   <el-container>
      <el-header>
        <Top/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sidebar/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Top from "./layout/top.vue";
import Sidebar from "./layout/sidebar.vue";
export default {
  components: {
    Top,
    Sidebar
  }
};
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100%;
}
</style>
