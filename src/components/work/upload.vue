<template>
  <div>
    <div class="reindex">
      <div class="content">
        <ul>
          <li class="left form-group">
            <p>Document</p>
          </li>
          <li class="right">
            <div class="load">
              <el-input class="int" v-model="shi"></el-input>
              <el-button type="primary" v-on:click="openFile2()" round>Browse</el-button>
              <input type="file" @change="get2()" name="filename2" id="open3" style="display: none" />
            </div>
          </li>
          <li class="left form-group">
            <p>Main Type</p>
          </li>
          <li class="right">
            <div>
              <el-select class="selt" v-model="mainType" placeholder>
                <el-option
                  v-for="(item,index) in mainList"
                  :key="index"
                  :label="item.commodityName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </li>
        </ul>
      </div>
      <div class="btn">
        <button>CLEAR</button>
        <button @click="showRealPath">SUBMIT</button>
      </div>
    </div>
  </div>
</template>
<script>
// var filepath2=''
export default {
  data() {
    return {
      filepath2: "",
      mainType: "",
      mainList: [],
      shi: "",
      params: {
        pageNo: 1,
        pageSize: 10,
        merchant: null,
        commodityType: null
      }
    };
  },
  created() {
    this.getMainList();
  },
  mounted() {
    this.getMainList();
  },
  methods: {
    openFile2() {
      document.getElementById("open3").click();
    },
    get2() {
      console.log("files", document.getElementById("open3").files);
      this.filepath2 = document.getElementById("open3").files[0];
      console.log("filepath2:", this.filepath2);
      this.shi = this.filepath2.name;
    },
    showRealPath() {
      let formData = new window.FormData();
      console.log("filepath2:", this.filepath2);
      formData.append("file", this.filepath2);
      formData.append("mainType", this.mainType);
      console.log("formData:", formData);

      this.$http.post("file/upload", formData).then(res => {
        console.log("res:", res);
      });
    },
    getMainList(params) {
      console.log(111222);
      this.$http.post("commodity/list", this.params).then(data => {
        console.log("data:", data);
        var { status, data } = data;
        if (status === 200) {
          this.mainList = data.data.list;
          console.log("mainList:", mainList);
        }
      });
    }
  }
};
</script>
<style>
.load {
  display: flex;
  justify-content: space-between;
}
.int {
  width: 80%;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
}
.left {
  width: 16%;
  height: 20%;
  text-align: right;
  line-height: 300%;
  margin-right: 10px;
}
.right {
  width: 80%;
  height: 20%;
}
.selt {
  width: 80%；;
}
</style>