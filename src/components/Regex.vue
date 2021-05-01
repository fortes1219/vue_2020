<template>
    <div data-inset="1rem">
      <el-form style="width: 600px;">
        <el-form-item label="Name" label-width="130">
          <el-input type="text" placeholder="Name" />
        </el-form-item>
        <el-form-item label="Job" label-width="130">
          <el-input type="text" placeholder="Job" />
        </el-form-item>
        <el-form-item label="Email" label-width="130">
          <el-input type="text" placeholder="Email" />
        </el-form-item>
        <el-button type="primary">送出</el-button>
      </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      rules: {},
    }
  },

}
</script>