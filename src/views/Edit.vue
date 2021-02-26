<template>
  <div class="Edit">
    <div class="head">
      <div class="left_arrow">
        <img src="../assets/img/左箭头.svg" @click="backPage" alt="" />
      </div>
      <span class="count_info">账号资料</span>
    </div>
    <count-edit
      :model="model"
      @loadPhoto="loadPhoto"
      @mySexShow="mySexShow"
    ></count-edit>
  </div>
</template>

<script>
import CountEdit from "@/components/user/CountEdit.vue";

export default {
  name: "edit",
  data() {
    return {
      model: {},
    };
  },
  components: { CountEdit },
  mounted() {
    this.getUserInfo();
  },
  updated() {
    this.model.id = localStorage.getItem("id");
    this.model.name = localStorage.getItem("username");
    this.model.user_desc = localStorage.getItem("user_desc");
  },
  methods: {
    async getUserInfo() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    backPage() {
      this.$router.back();
    },
    loadPhoto(e) {
      this.model.user_img = e;
      this.userUpdate();
      this.$msg("修改成功");
    },
    mySexShow(sex) {
      console.log(sex, "你好");
      this.model.gender = sex;
      this.userUpdate();
    },
    // 调用根据网络请求中的数据
    async userUpdate() {
      const res = await this.$http.post(
        "update/" + localStorage.getItem("id"),
        this.model
      );
      console.log(res);
    },
  },
};
</script>

<style lang='less' scoped>
.Edit {
  .head {
    background: #fff;
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
    box-shadow: 0px 0px 15px #e3e3e3;
    .left_arrow {
      height: 30px;
      padding: 20px;
      img {
        height: 100%;
      }
    }
    .count_info {
      color: #323232;
    }
  }
}
</style>