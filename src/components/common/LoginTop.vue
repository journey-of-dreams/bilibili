<template>
  <div class="LoginTop">
    <div><img src="../../assets/img/bilibili-fill.svg" alt="bilibili" /></div>
    <div>{{ middleTop }}</div>
    <div>
      <slot name="right">111</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginTop",
  props: {
    middleTop: {
      type: String,
      default() {
        return "";
      },
    },
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
.LoginTop {
  height: 12.5vw;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.444vw;
    img {
      width: 20%;
      height: 20%;
    }
  }
}
</style>