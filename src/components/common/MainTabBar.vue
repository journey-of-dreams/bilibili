<template>
  <tab-bar v-show="isShow">
    <tab-bar-item path="/home">
      <i slot="item-icon" class="iconfont icon-zhuye"></i>
      <i slot="item-icon-active" class="iconfont icon-zhuye1"></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i slot="item-icon" class="iconfont icon-fenquweixuanzhong"></i>
      <i slot="item-icon-active" class="iconfont icon-fenquweixuanzhong"></i>
      <div slot="item-text">频道</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i slot="item-icon" class="iconfont icon-fengche"></i>
      <i slot="item-icon-active" class="iconfont icon-fengche"></i>
      <div slot="item-text">动态</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i slot="item-icon" class="iconfont icon-gouwu"></i>
      <i slot="item-icon-active" class="iconfont icon-shopping"></i>
      <div slot="item-text">会员购</div>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <i slot="item-icon" class="iconfont icon-bilibili-line1"></i>
      <i slot="item-icon-active" class="iconfont icon-bilibili-line"></i>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
  computed: {
    isShow() {
      if (
        this.$route.path.includes("/home") ||
        this.$route.path.includes("/my")
      ) {
        console.log(this.$route.path);
        return true;
      } else {
        this.$route.path;
        return false;
      }
    },
  },
};
</script>

<style scoped>
</style>
