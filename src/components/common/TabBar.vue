<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
#tab_bar {
  display: flex;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  padding: 3px 0px;
}
</style>