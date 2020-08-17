<template>
  <div>
    <el-button @click="downloadPost()">export</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    exportFile() {
      //   this.$http.get("file/export/excel").then(data => {
      //     var { status, data } = data;
      //    console.log('data:',data)
      //   });
      // window.location.href = 'http://192.168.0.104:8086/file/export/excel'

      this.$http
        .post("/file/export/excel", {
          responseType: "blob"
        })
        .then(res => {
          let blob = res.data;
          let reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = e => {
            let a = document.createElement("a");
            a.download = `表格名称.xlsx`;
            a.href = e.target.result;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          };
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    downloadFile() {
      let url = window.URL.createObjectURL(
        new Blob(["http://192.168.0.104:8086/file/export/excel"])
      );
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", "fileName");
      document.body.appendChild(link);
      link.click();
    },
    downloadPost(config) {
      return new Promise((resolve, reject) => {
          console.log('download post')
        this.$http({
          url: "/file/export/excel", // 请求地址
          method: "post",
          //   data: config.data, // 参数
          responseType: "blob" // 表明返回服务器返回的数据类型
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
</script>