<template>
  <div>
    <el-upload
      class="upload-demo"
      action="http://127.0.0.1:8086/file/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      data="dataObj">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div>
      code <el-input v-model="num" @input="checkNum()"/>
      <el-button type="primary" @click="clickToSingle()"/>
      <br>
      第九位 <el-input v-model="num9"/>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [],
        dataObj: {mainType: 55},
        num: '',
        num9: ''
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
      },
      checkNum() {
        console.log(this.num)
        this.num = this.num.replace(/[^\d.]/g,'')
        if(this.num.length > 8) {
          this.num = this.num.substring(0, 7);
        }
        for(var i = 0; i < 8; i++) {

        }
      },
      toSingle(num) {
        num = String(num)
        var sum = 0;
        for(var i = 0; i < num.length; i++) {
          sum = sum + Number(num[i])
        }
        if(sum > 9) {
          return this.toSingle(sum)
        } else{
          return sum;
        }
      },
      clickToSingle() {
        var sum = 0
        for(var i = 0; i < this.num.length; i++) {
          var temp = this.num[i] * (10 - (i + 2))
          var single = this.toSingle(temp)
          sum += Number(single)
        }
        if (sum > 10) {
          sum = sum % 10
        }
        if(sum > 0) {
          sum = 10 - sum
        }
        console.log('第九位数：', sum)
        this.num9 = sum
        this.num = this.num + sum
        // var singleNum = this.toSingle(this.num)
        // console.log('singleNum', singleNum)
      }
    }
  }
</script>
<style >
.el-upload__input {
  display: none !important;
}
</style>
