<template>
  <!-- 侧边栏 -->
  <el-menu
    :default-active="path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="red"
    :router="true"
  >
    <el-submenu v-for="item1 in rightList" :key="item1.id" :index="item1.path">
      <!--  一级菜单 -->
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item1.authName}}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item v-for="item2 in item1.children" :key="item2.id" :index="'/'+item2.path">
        <i class="el-icon-star-on">{{item2.authName}}</i>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      rightList: [
        {
          id: 101,
          path: "",
          order: 1,
          authName: "运动数据",
          children: [
            {
              id: 201,
              path: "sports/sports",
              authName: "运动表格"
            },
            {
              id: 202,
              path: "sports/sportsV2",
              authName: "运动柱状图"
            },
            {
              id: 203,
              path: "sports/sportsV3",
              authName: "运动柱状图v3"
            },
            {
              id: 204,
              path: "sports/sportsEcharts",
              authName: "运动echarts"
            },
            {
              id: 205,
              path: "sports/charts/CalendarPoint",
              authName: "运动echarts-2"
            },
            {
              id: 206,
              path: "sports/charts/effectScatterBmap",
              authName: "运动echarts-3"
            }
          ]
        },
        {
          id: 102,
          path: "",
          order: 2,
          authName: "商品",
          children: [
            {
              id: 207,
              path: "goods/goodsList",
              authName: "商品列表"
            }
          ]
        },
        {
          id: 103,
          path: "",
          order: 3,
          authName: "订单",
          children: [
            {
              id: 208,
              path: "allOrders",
              authName: "订单列表"
            }
          ]
        },
         {
          id: 104,
          path: "",
          order: 4,
          authName: "工作问题",
          children: [
            {
              id: 209,
              path: "work/button",
              authName: "按钮切换"
            },
            {
              id: 210,
              path: "work/upload",
              authName: "上传文件"
            },
            {
              id: 220,
              path: "work/uploadLiming",
              authName: "上传图片-李明"
            },
            {
              id: 221,
              path: "work/uploadLimingV2",
              authName: "上传图片-李明V2"
            }
          ]
        }
      ]
    };
  },
  computed: {
    path: function() {
      return this.$router.path;
    }
  },
  methods: {
    async getUserRight() {
      var res = await this.$http.request({
        url: `/menus`,
        method: "get"
      });
      var { meta, data } = res.data;
      if (meta.status === 200) {
        // console.log("rightList:",this.rightList)
        this.rightList = data;
        // console.log("rightList:",this.rightList)
      } else {
        this.$message.error(meta.msg);
      }
    }
  },
  mounted() {
    // this.getUserRight()
  }
};
</script>

<style>
/* 侧边栏样式 */
.el-menu-vertical-demo {
  height: 100%;
  background-color: azure;
}
</style>
