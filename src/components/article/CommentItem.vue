<template>
  <div id="comment_item">
    <div class="send_comment">
      <input
        type="text"
        placeholder="发条友善的评论"
        @click="focusInput"
        v-model="content"
        maxlength="500"
        ref="reply"
      />
      <i class="iconfont icon-fasong" @click="postCommit"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  components: {},
  data() {
    return {
      content: "",
      userInfo: null,
    };
  },
  created() {
    this.userInfoData();
  },
  mounted() {
    this.$store.commit("isFocus", false);
  },
  methods: {
    async userInfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.userInfo = res.data[0];
    },
    focusInput() {
      if (!this.userInfo) {
        this.$router.push("/login");
      }
    },
    postCommit() {
      if (this.content != "") {
        this.$emit("postCommit", this.content);
      }
    },
  },
  watch: {
    // 观察vuex中isFocus的变化，来判断底部输入框是否聚焦
    "$store.state.isFocus"() {
      if (this.$store.state.isFocus) {
        this.$refs.reply.focus();
        this.$refs.reply.placeholder = `回复 @${this.$store.state.replyId.name}：`;
      }
      this.$store.commit("isFocus", false);
    },
  },
};
</script>

<style lang='less' scoped>
#comment_item {
  .send_comment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    padding: 10px;
    input {
      border: none;
      background: #f3f3f3;
      border-radius: 10px;
      padding: 7px;
      font-size: 13px;
      flex: 1;
      margin-right: 10px;
    }
  }
}
</style>