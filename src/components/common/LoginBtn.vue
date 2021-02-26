<template>
  <div class="LoginBtn" @click="registerClick">
    <div class="login_btn">{{btntext}}</div>
  </div>
</template>

<script>
export default {
  name: "loginBtn",
  props:['btntext'],
  components: {},
  mounted() {},
  methods: {
    registerClick() {
        this.$emit("registerClick")
    },
  },
};
</script>

<style lang='less' scoped>
.LoginBtn {
  .login_btn {
    height: 12.5vw;
    margin: 4.167vw 2.778vw;
    background: #ff9db5;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6.25vw;
    font-size: 4.444vw;
  }
}
</style>