<template>
  <div class="MyQRcode">
    <div class="navbar">
      <div class="left">
        <img src="../assets/img/左箭头.svg" @click="backPage" alt="" />
        <span>二维码</span>
      </div>
      <div class="right">
        <img src="../assets/img/转发.svg" alt="" />
        <img src="../assets/img/下载.svg" alt="" />
      </div>
    </div>
    <div class="my_card">
      <div class="top">
        <div class="face">
          <img :src="require('../assets/img/头像 男孩.svg')" alt="" />
        </div>
        <div class="name-id">
          <span class="name">{{ username }}</span>
          <span class="ID">ID：{{ my_id }}</span>
        </div>
      </div>
      <div class="two_card">
        <img src="../assets/img/Snipaste_2021-02-07_01-04-37.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myQRcode",
  components: {},
  data() {
    return {
      username: "",
      my_id: 0,
    };
  },
  mounted() {
    this.username = localStorage.getItem("username");
    this.my_id = localStorage.getItem("id");
  },
  methods: {
    backPage() {
      this.$router.back();
    },
  },
};
</script>

<style lang='less' scoped>
.navbar {
  background: #fff;
  padding: 0 10px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    font-size: 14px;
    img {
      height: 22px;
      padding-right: 20px;
    }
  }
  .right {
    img {
      height: 22px;
      padding-left: 20px;
    }
  }
}
.my_card {
  width: 280px;
  background: #fff;
  border: 1px solid #ccc;
  transform: translate(37px, 100px);
  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 5px;
    .face {
      padding: 0 10px;
      img {
        height: 45px;
      }
    }
    .name-id {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      .name {
        font-size: 14px;
      }
      .ID {
        font-size: 13px;
        color: #6d6d6d;
      }
    }
  }
  .two_card {
    img {
      width: 100%;
    }
  }
}
</style>