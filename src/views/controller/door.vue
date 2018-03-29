<template>
<el-row type="flex" justify="center">
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>1幢</span>
        <el-switch
        style="display: block; float: right; padding: 3px 0"
        v-model="value3"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="开"
        inactive-text="关">
        </el-switch>
    </div>
    <div v-for="o in 2" :key="o" class="text item">
        {{'维修人员： ' + o }}
    </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  data(){
      return {
          value3: true,
      }
  }
}
</script>


<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

