<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Element-UI</h2>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <hr>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <hr>
      <el-calendar v-model="value">
      </el-calendar>  
      <hr>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
          >
        </el-date-picker>
      </div>

      </div>
  </div>
</template>

<script>
export default {
  name:'Banner',
  data() {
    return {
      value:'',
      value1:''
    }
  },
}
</script>

<style>

</style>