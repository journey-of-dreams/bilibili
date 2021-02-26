<template>
  <div class="BirthSelect" v-show="isBirthShow">
    <dialog-base
      ref="isSure"
      :message="message"
      :select="select"
      :isShow="isBirthShow"
      @yourShow="myShow"
    >
      <div slot="center">
        <div class="birthday">
          <div class="birthday_year">{{ birth.year }}年</div>
          <div class="birthday_date">
            {{ birth.month }}月{{ birth.day }}日周{{ birth.week }}
          </div>
        </div>
        <calendar @birthday="birthday"></calendar>
      </div>
    </dialog-base>
  </div>
</template>

<script>
import Calendar from "../Calendar.vue";
import DialogBase from "../dialog/DialogBase.vue";

export default {
  name: "birthSelect",
  components: { Calendar, DialogBase },
  props: ["isBirthShow"],
  data() {
    return {
      message: "",
      select: "",
      birth: {
        year: "1990",
        month: "1",
        day: "1",
        week: "五",
      },
    };
  },
  mounted() {},
  methods: {
    show(message = "默认文字", select = "") {
      this.message = message;
      this.select = select;
    },
    myShow(e) {
      this.$emit("myShow", e);
      let myBirth = JSON.stringify(this.birth);
      let birth = JSON.parse(myBirth);
      let birthday = `${birth.year}-${birth.month}-${birth.day}`;
      localStorage.setItem("birthday",birthday);
    },
    birthday(birth) {
      this.birth = birth;
    },
  },
};
</script>

<style lang='less' scoped>
.birthday {
  width: calc(100% - 40px);
  background: #fa7298;
  color: #fff;
  padding: 12px 20px;
  .birthday_year {
    font-size: 14px;
  }
  .birthday_date {
    font-size: 28px;
  }
}
</style>