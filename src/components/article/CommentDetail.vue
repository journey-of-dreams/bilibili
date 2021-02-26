<template>
  <div id="comment_detail" ref="reference2">
    <div class="nav">
      <span>评论详情</span>
      <i class="iconfont icon-tianjia" @click="distroyDetail"></i>
    </div>
    <div class="middle" v-if="commentList[commentIndex]">
      <span class="middle_text"
        >相关回复共{{ commentList[commentIndex].child.length }}条</span
      >
      <first-comment :userInfo="commentList[commentIndex]"></first-comment>
      <div class="shadow"></div>
      <div
        class="comment_item"
        v-for="(item, index) in commentList[commentIndex].child"
        :key="index"
      >
        <first-comment :userInfo="item"></first-comment>
      </div>
    </div>
    <span class="bottom_text">o(╥﹏╥)o再怎么找也没有啦</span>
  </div>
</template>

<script>
import FirstComment from "./FirstComment";

export default {
  name: "CommentDetail",
  components: { FirstComment },
  props: ["commentList", "commentIndex"],
  methods: {
    distroyDetail() {
      this.$refs.reference2.style.display = "none";
    },
  },
};
</script>

<style lang='less' scoped>
#comment_detail {
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    font-size: 13px;
    border-bottom: 1px solid #f1f1f1;
  }

  .middle {
    .middle_text {
      font-size: 12px;
      color: #a1a1a1;
      display: block;
      padding: 10px 8px;
    }
    .shadow {
      background: #f1f1f1;
      width: 100%;
      height: 15px;
    }
  }
  .bottom_text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    color: #f97396;
    border-bottom: 1px dotted #f97396;
  }
}
</style>