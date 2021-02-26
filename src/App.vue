<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "./components/common/MainTabBar";
export default {
  name: "app",
  components: { MainTabBar },
};
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f4f4f4;
}
</style>
