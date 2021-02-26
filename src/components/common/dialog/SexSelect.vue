<template>
  <div class="SexSelect" v-show="isSexShow">
    <dialog-base
      :message="message"
      :select="select"
      :isShow="isSexShow"
      @yourShow="myShow"
    >
      <div slot="left">
        <div
          class="sex"
          :class="{ active: isActive }"
          @click="yourSelect('男')"
        >
          <img src="@/assets/img/男士.png" alt="" />
          <span class="boy">男</span>
        </div>
      </div>
      <div slot="center">
        <div
          class="secret"
          :class="{ active: isActive }"
          @click="yourSelect('保密')"
        >
          <span>?</span>
          <span>保密</span>
        </div>
      </div>
      <div slot="right">
        <div
          class="sex"
          :class="{ active: isActive }"
          @click="yourSelect('女')"
        >
          <img src="@/assets/img/女.svg" alt="" />
          <span class="girl">女</span>
        </div>
      </div>
    </dialog-base>
  </div>
</template>

<script>
import DialogBase from "./DialogBase.vue";

export default {
  name: "SexSelect",
  components: { DialogBase },
  props: ["isSexShow"],
  data() {
    return {
      message: "",
      select: "",
      isActive: false,
      activeObjList: ["left", "center", "right"],
    };
  },
  methods: {
    // 通过调用此方法显示对话框
    show(message = "默认文字", select = "") {
      this.message = message;
      this.select = select;
    },
    myShow(e) {
      this.$emit("myShow", e);
    },
    yourSelect(sex) {
      this.$emit("mySex", sex);
    },
  },
};
</script>

<style lang='less' scoped>
.SexSelect {
  display: flex;
  justify-content: center;
  align-items: center;
  .sex {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    width: 68px;
    height: 33px;
    margin: 20px 0;
    img {
      height: 20px;
      display: block;
    }
  }
  .boy {
    color: #61abff;
  }
  .girl {
    color: #fa91ac;
  }

  .secret {
    padding: 20px 0;
    margin: 20px 0;
    width: 68px;
    height: 33px;
    flex: 1;
    color: #757575;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      display: block;
    }
  }
  .active {
    color: #fff;
    background: #858585;
    border-radius: 50%;
  }
}
</style>