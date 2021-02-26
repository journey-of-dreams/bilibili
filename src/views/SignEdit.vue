<template>
  <div class="SignEdit">
    <div class="top_item">
      <div class="left">
        <img src="../assets/img/左箭头.svg" alt="" @click="backPage" />
        <span>修改个性签名</span>
      </div>
      <div class="right" @click="store">保存</div>
    </div>
    <div class="new_sign">
      <textarea
        placeholder="请输入新个性签名"
        v-model="new_sign"
        :disabled="isDisabled"
      />
    </div>
    <div class="num_limit">
      <span>{{ 70 - new_sign.length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "signEdit",
  components: {},
  data() {
    return {
      new_sign: "",
      isDisabled: false,
    };
  },
  mounted() {},
  methods: {
    store() {
      localStorage.setItem("user_desc", this.new_sign);
      this.$msg("保存成功")
    },
    backPage() {
      this.$router.back();
    },
  },
  watch: {
    new_sign() {
      if (this.new_sign.length >= 70) {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style lang='less' scoped>
.SignEdit {
  color: #9f9f9f;
  .top_item {
    background: #fff;
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
    box-shadow: 0px 0px 15px #e3e3e3;
    .left {
      color: #484848;
      display: flex;
      align-content: center;
      align-items: center;
      img {
        height: 25px;
        padding: 0 20px;
      }
      span {
        display: block;
      }
    }
    .right {
      font-size: 14px;
      margin-right: 20px;
    }
  }
  .new_sign {
    padding: 5px 18px 20px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    textarea {
      width: 100%;
      padding: 5px 0 50px 0;
      border: none;
      background: none;
      border-bottom: 2px solid #f8789a;
    }
  }
  .num_limit {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 13px;
    padding: 0 18px;
  }
}
</style>