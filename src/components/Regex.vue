<template>
    <div data-inset="1rem">
      <el-form ref="ruleForm" :model="formData" :rules="rules" style="width: 600px;" label-width="130">
        <el-form-item label="Name" prop="name">
          <el-input v-model="formData.name" type="text" placeholder="Name" />
        </el-form-item>
        <el-form-item label="ID" prop="id">
          <el-input v-model="formData.id" type="text" placeholder="ID Number" />
        </el-form-item>
        <el-form-item label="Email" prop="mail">
          <el-input v-model="formData.mail" type="text" placeholder="Email" />
        </el-form-item>
        <el-form-item label="Website" prop="website">
          <el-input v-model="formData.website" type="text" placeholder="Website" />
        </el-form-item>
        <el-button type="primary" @click="submit">送出</el-button>
        <el-button @click="clickToCall().successTest()">call</el-button>
      </el-form>
    </div>
</template>

<script>
import { idCard, domainNameFinder, webUrl } from "../utils/validator"
export default {
  data() {
    return {
      // data v-models
      formData: {
        name: '',
        id: '',
        mail: '',
        website: ''
      },
      // 驗證規則
      rules: {
        name: [
          {required: true, message: "Name is required!!"}
        ],
        id: [
          {required: true, message: "ID is required!!"},
          {validator: this.validateMyId, trigger: "blur"}
        ],
        mail: [
          {required: true, message: "Mail is required!!"}
        ],
        website: [
          {required: true, validator: this.validateUrl, trigger: "blur" }
        ]
      },
    }
  },

  methods: {
    // 自訂驗證規則: ID格式
    validateMyId(rule, value, callback) {
      if (this.formData.id !== '') {
        if (idCard(value, callback)) {
          setTimeout(() => {
            this.$refs.ruleForm.validateField('id');
          }, 1000)
          callback();
        }
      }
      
      // 未抽出去的寫法---->
      // const regex = /^[A-Za-z][12]\d{8}$/
      // if (!regex.test(value)) {
      //   callback(new Error('ID格式不正確'));
      //   console.log("###Vlidator: ", !regex.test(value), value, regex)
      // } else {
      //     if (this.formData.id !== '') {
      //       setTimeout(() => {
      //         this.$refs.ruleForm.validateField('id');
      //       }, 1000)
      //     }
      //     callback();
      // }
    },

    // 驗證網址是否有效
    validateUrl(rule, value, callback) {
      if (this.formData.website !== '') {
        if (webUrl(value, callback)) {
          setTimeout(() => {
            this.$refs.ruleForm.validateField('website');
          }, 1000)
          callback();
        }
      }
    },

    clickToCall() {
      const errorTest = () => {
        console.log("###errorTest")
      }
      const successTest = () => {
        console.log("###successTest")
      }
      return {
        errorTest: errorTest,
        successTest: successTest
      }
    },

    // Submit
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: 'Success!!' + domainNameFinder(this.formData.website),
            type: 'success'
          });
        } else {
          this.$message.error('Data Format Error')
          return false;
        }
      });
    }
  }

}
</script>