<template>
  <div class="AliasEdit">
    <div class="top_item">
      <div class="left">
        <img src="../assets/img/左箭头.svg" alt="" @click="backPage" />
        <span>修改昵称</span>
      </div>
      <div class="right" @click="store">保存</div>
    </div>
    <div class="new_alias">
      <input type="text" placeholder="请输入新昵称" v-model="new_alias" />
      <div class="err_icon">×</div>
    </div>
    <div class="assume_coin">
      <div class="left">修改昵称需要消耗6枚硬币</div>
      <div class="right">如何获取硬币？</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aliasEdit",
  components: {},
  data() {
    return {
      new_alias: "",
    };
  },
  mounted() {},
  methods: {
    store() {
      localStorage.setItem("username", this.new_alias);
      this.$msg("保存成功");
    },
    backPage() {
      this.$router.back();
    },
  },
};
</script>

<style lang='less' scoped>
.AliasEdit {
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
  .new_alias {
    padding: 25px 18px 20px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    input {
      width: 100%;
      padding: 5px 0;
      border: none;
      background: none;
      border-bottom: 2px solid #f8789a;
    }
    .err_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      font-size: 18px;
    }
  }
  .assume_coin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 18px;
    .left {
    }
    .right {
    }
  }
}
</style>