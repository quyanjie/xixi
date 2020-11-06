<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://127.0.0.1:8086/file/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      exportFile() {
        var url = 'http://pekbj**010:8097/**/export/';
        //data.docId 是变量吗？如果是变量不能在字符串引号里，要这个加出变量的值
        url = url + data.docId + '/';
        //legal 是变量吗？如果是变量不能在字符串引号里，要这个加出变量的值
        url = url + legal + '/';
        //DMS 是变量吗？如果是变量不能在字符串引号里，要这个加出变量的值
        url = url + DMS;
        window.location.href = url;
      }
    }
  }
</script>
