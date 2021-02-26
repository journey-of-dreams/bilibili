<template>
  <div id="home_nav_bar">
    <div class="face">
      <img
        :src="
          model.user_img == null
            ? require('@/assets/img/头像 男孩.svg')
            : model.user_img
        "
        alt=""
      />
    </div>
    <div class="search">
      <div class="search_img">
        <img src="../../assets/img/搜索.png" alt="" />
      </div>
    </div>
    <div class="game-mail">
      <div class="game">
        <img src="../../assets/img/游戏.svg" alt="" />
      </div>
      <div class="mail">
        <img src="../../assets/img/邮箱.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home_nav_bar",
  components: {},
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.userInfoData();
  },
  methods: {
    async userInfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      // console.log(res);
      this.model = res.data[0];
    },
  },
};
</script>

<style lang='less' scoped>
#home_nav_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 45px;
  position: sticky;
  top: 0;
  z-index: 999;
  .face {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
  .search {
    flex: 4;
    background: #f4f4f4;
    padding: 8px 10px;
    border-radius: 15px;
    height: 30%;
    .search_img {
      img {
        height: 16px;
      }
    }
  }
  .game-mail {
    flex: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 22px;
    }
    .game{
        img{
            height: 30px;
        }
    }
  }
}
</style>