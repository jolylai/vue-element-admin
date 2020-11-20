<template>
  <div class="login">
    <h2 style="text-align: center">登录</h2>
    <el-form ref="formRef" :model="form">
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="btn-block" type="primary" @click="onSubmit">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref, toRaw } from "vue";

export default {
  setup() {
    const formRef = ref();

    const form = reactive({
      username: "admin",
      password: "123456"
    });

    const onSubmit = () => {
      console.log(toRaw(form));
    };

    return {
      form,
      onSubmit,
      formRef
    };
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 400px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-block {
  width: 100%;
}
</style>
