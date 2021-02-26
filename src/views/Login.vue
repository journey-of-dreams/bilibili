<template>
  <div class="Login">
    <login-top middleTop="登录bilibili">
      <div
        slot="right"
        style="font-size: 13px"
        @click="$router.push('/register')"
      >
        注册
      </div>
    </login-top>
    <login-text
      label="账号"
      placeholder="你的手机号/邮箱"
      type=""
      rule="^[1][3,4,5,7,8,9][0-9]{9}$"
      style="margin-top: 4.167vw; border-top: 1px solid #ccc"
      @inputTrue="inputName"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$"
      @inputTrue="inputPassword"
    ></login-text>
    <login-btn @registerClick="registerSubmit" btntext="登录"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";

export default {
  name: "login",
  data() {
    return {
      mode: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
  mounted() {},
  methods: {
    inputName(e) {
      this.mode.username = e;
    },
    inputPassword(e) {
      this.mode.password = e;
    },
    async registerSubmit() {
      if (this.mode.username !== "" && this.mode.password !== "") {
        const res = await this.$http.post("/login", this.mode);
        this.$msg.success(res.data.msg);
        if (res.data.code === 200) {
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("token", res.data.token);
          // 成功登录
          this.$msg.success(res.data.msg);
          setTimeout(() => this.$router.push("/home"), 1000);
        } else {
          this.$msg.fail(res.data.msg);
        }
      }
    },
  },
};
</script>

<style lang='less' scoped>
</style>