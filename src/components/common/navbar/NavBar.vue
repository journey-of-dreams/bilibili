<template>
  <div id="nav_bar">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
#nav_bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  height: 48px;
  width: calc(100% - 20px);
}
</style>