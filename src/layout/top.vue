<template>
  <el-row>
    <el-col :span="6">
      <div>
        <div>hello world</div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="e-h-title">电商后台管理系统</div>
    </el-col>
    <el-col :span="6">
      <div class="e-h-logout">
        <a href="#">退出</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style>
.e-h-title {
  text-align: center;
  font-size: 24px;
 
}

.e-h-logout {
  float: right;
  margin-right: 10px;
  text-decoration: none;
}

.e-h-logout a {
  text-decoration: none;
 
}

</style>