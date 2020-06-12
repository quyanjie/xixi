<template>
  <!-- 侧边栏 -->
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link active-class="active" tag="li" to="/list">
        <a>英雄列表</a>
      </router-link>

      <router-link active-class="active" tag="li" to="/foo">
        <a>武器列表</a>
      </router-link>

      <router-link active-class="active" tag="li" to="/boo">
        <a>装备列表</a>
      </router-link>

      <router-link active-class="active" tag="li" to="/sports/sports">
        <a>运动步数-表格</a>
      </router-link>

      <router-link active-class="active" tag="li" to="/sports/sportsEcharts">
        <a>运动步数-图表</a>
      </router-link>

      <router-link active-class="active" tag="li" to="/sports/sportsV2">
        <a>运动步数V2</a>
      </router-link>

      <router-link active-class="active" tag="li" to="/goods/goodsList">
        <a>商品列表</a>
      </router-link>

      <router-link active-class="active" tag="li" to="/allOrders">
        <a>订单列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
