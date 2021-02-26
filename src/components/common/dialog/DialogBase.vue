
<template>
  <div class="dialog_base">
    <div class="top">{{ message }}</div>
    <div class="middle">
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </div>
    <div class="bottom" @click="isConfirm">{{ select }}</div>
  </div>
</template>

<script>
export default {
  name: "DialogBase",
  props: ["message", "select", "isShow",],
  methods: {
    isConfirm() {
      this.$emit("yourShow", !this.isShow);
    },
  },
  updated() {
    if (this.isShow) {
      if (document.querySelector(".mask") == null) {
        let mask = document.createElement("div");
        document.getElementById("app").appendChild(mask);
        mask.className = "mask";
        mask.style.width = "100%";
        mask.style.height = "100%";
        mask.style.position = "absolute";
        mask.style.background = "black";
        mask.style.top = "0";
        mask.style.opacity = "0.5";
      }
    } else {
      let mask = document.body.querySelector(".mask");
      document.getElementById("app").removeChild(mask);
    }
  },
};
</script>

<style lang='less' scoped>
.dialog_base {
  width: 325px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: #fff;
  font-size: 17px;
  box-shadow: 0 0 10px #666666;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 0;
  }
  .middle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 0;
  }
}
// .mask {
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   background: red;
// }
</style>