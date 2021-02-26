<template>
  <div id="comment">
    <div
      class="comment_item1"
      v-for="(item, index) in commentList"
      :key="index"
    >
      <first-comment :userInfo="item"></first-comment>
      <div
        class="reply"
        @click="showDetailComment(index)"
        v-if="item.child.length != 0"
      >
        <span>共{{ item.child.length }}条回复</span>
        <i class="iconfont icon--arrow-left"></i>
      </div>
    </div>
    <comment-detail
      class="detail_comment"
      ref="reference"
      :commentIndex="commentIndex"
      :commentList="commentList"
    ></comment-detail>
    <comment-item class="comment_item" @postCommit="postSuccess"></comment-item>
  </div>
</template>

<script>
import FirstComment from "./FirstComment";
import CommentDetail from "./CommentDetail";
import CommentItem from "@/components/article/CommentItem";
export default {
  name: "Comment",
  components: { FirstComment, CommentDetail, CommentItem },
  data() {
    return {
      commentInfo: [],
      commentList: [],
      commentIndex: -1,
      commitForm: {},

      //   userInfo: {},
    };
  },
  mounted() {},
  created() {
    this.commentData();
  },
  methods: {
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      this.commentInfo = res.data;
      this.commentList = this.changeComment(null);
    },
    async postSuccess(content) {
      this.commitForm.comment_content = content;
      const date = new Date();
      if (date.getDate < 10) {
        this.commitForm.comment_date = `${
          date.getMonth() + 1
        }-0${date.getDate()}`;
      } else {
        this.commitForm.comment_date = `${
          date.getMonth() + 1
        }-${date.getDate()}`;
      }
      this.commitForm.article_id = this.$route.params.id;
      this.commitForm.parent_id = this.$store.state.replyId.id;
      const result = await this.$http.post(
        "/comment_post/" + localStorage.getItem("id"),
        this.commitForm
      );
      console.log(result);
      this.commentData()
    },
    changeComment(temp) {
      let arr1 = [];
      for (let i = 0; i < this.commentInfo.length; i++) {
        if (this.commentInfo[i].parent_id == temp) {
          arr1.push(this.commentInfo[i]);
          this.commentInfo[i].child = this.changeComment(
            this.commentInfo[i].comment_id
          );
        }
      }
      return arr1;
    },
    showDetailComment(index) {
      this.$refs.reference.$el.style.display = "block";
      this.commentIndex = index;
    },
  },
};
</script>

<style lang='less' scoped>
#comment {
  padding-bottom: 50px;
  .comment_item1 {
    border-bottom: 1px solid #e1e1e1;
    .reply {
      background: #f4f4f4;
      font-size: 12px;
      padding: 5px;
      margin: 0 15px 0 50px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      color: #46a2c9;
      font-weight: 600;
      cursor: pointer;
      .iconfont {
        font-size: 10px;
        padding-left: 5px;
      }
    }
  }
  .detail_comment {
    position: absolute;
    width: 100%;
    top: 204px;
    display: none;
    background: #fff;
  }
  .comment_item {
    position: fixed;
    background: #fff;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
  // }
}
</style>