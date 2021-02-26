<template>
  <div id="user_nav_bar">
    <nav-bar>
      <div slot="left" class="left" @click="backPage">
        <img src="~assets/img/左箭头 (1).svg" alt="" />
        <img src="~assets/img/BILIBILI_LOGO.svg" alt="" srcset="" />
      </div>
      <div slot="center" class="center">
        <img src="~assets/img/搜索.png" alt="" />
      </div>
      <div slot="right" class="right">
        <img src="~assets/img/头像 男孩.svg" alt="" srcset="" />
        <img
          src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/navOpenApp.png"
        />
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "UserNavBar",
  components: { NavBar },
  mounted() {},
  methods: {
    backPage() {
      this.$router.back();
    },
  },
};
</script>

<style lang='less' scoped>
#user_nav_bar {
  img {
    height: 30px;
  }
  .center {
    text-align: right;
    flex: 1;
  }
  .right{
    img{
      margin-left: 10px;
    }
  }
}
</style>