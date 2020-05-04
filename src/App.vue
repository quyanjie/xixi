<template>
  <div id="app">
    <!-- 导航 copy-->
    <Top />
    <!-- 导航之下的内容 copy -->
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <SideBar />
        <!-- 内容 -->
       <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./layout/top.vue";
import SideBar from "./layout/sideBar.vue";
export default {
  components: {
    Top,
    SideBar
  }
};
</script>

<style>
</style>
