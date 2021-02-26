<template>
  <div class="UserInfo">
    <user-nav-bar></user-nav-bar>
    <div class="backImg">
      <img src="~assets/img/photo-1476445704028-a36e0c798192.jpg" />
    </div>
    <banner :userInfo="model"></banner>
    <van-tabs swipeable color="#fb7c9e" animated>
      <van-tab title="主页"></van-tab>
      <van-tab title="动态"></van-tab>
      <van-tab title="收藏"></van-tab>
      <van-tab title="追番"></van-tab>
    </van-tabs>
    <div class="live_room">
      <img src="~assets/img/投影仪.svg" alt="" />
      <span>进入我的直播间</span>
    </div>
    <div class="home_more">
      <div class="collect">
        <span>收藏 4</span>
        <img src="~assets/img/不可见.svg" alt="" />
      </div>
      <div class="more"> 
        <span>查看更多</span>
        <img src="~assets/img/右箭头.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import UserNavBar from "./childComps/UserNavBar";
import Banner from "./childComps/Banner";

export default {
  name: "userInfo",
  data() {
    return {
      model: {},
      // active: 1,
    };
  },
  components: { UserNavBar, Banner },
  mounted() {
    this.userInfoData();
  },
  methods: {
    async userInfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      console.log(res);
      this.model = res.data[0];
      console.log(this.model);
    },
  },
};
</script>

<style lang='less' scoped>
.UserInfo {
  .backImg {
    // padding: 0 10px;
    background: #fff;
    width: 100%;
    img {
      width: 100%;
      height: 86.4px;
    }
  }
  .live_room {
    background: #fff;
    margin-top: 15px;
    width: 90%;
    transform: translateX(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 0;
    font-size: 13px;
    img {
      margin-right: 15px;
    }
  }
  .home_more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 10px 5px 10px;
    .collect {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      img {
        padding-left: 7px;
      }
    }
    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      color: #b3b3b3;
    }
  }
}
</style>