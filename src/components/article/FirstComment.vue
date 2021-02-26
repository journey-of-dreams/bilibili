<template>
  <div id="first_comment">
    <div class="userInfo" v-if="userInfo.userinfo">
      <img
        :src="
          userInfo.userinfo.user_img
            ? userInfo.userinfo.user_img
            : require('../../assets/img/头像 男孩.svg')
        "
        alt=""
      />
      <div class="user_detail">
        <div>
          <span>{{
            userInfo.userinfo ? userInfo.userinfo.name : "热心网友"
          }}</span
          ><span class="rank">Lv4</span>
        </div>
        <span>{{ userInfo.comment_date }}</span>
      </div>
    </div>
    <div class="comment_detail">
      <div v-if="userInfo.child.length != 0 && userInfo.parent_id != null">
        回复<span style="color: #2193d4">{{
          userInfo.parent_user_info.name
        }}</span
        >：<span @click="focusInput({id:userInfo.comment_id,name:userInfo.userinfo.name})">{{
          userInfo.comment_content
        }}</span>
      </div>           
      <div v-else>
        <span @click="focusInput({id:userInfo.comment_id,name:userInfo.userinfo.name})">{{
          userInfo.comment_content
        }}</span>
      </div>
      <div class="operation">
        <div class="left">
          <i class="iconfont icon-dianzan"><span>22</span></i>
          <i class="iconfont icon-caishixin-"></i>
          <i class="iconfont icon-visibility"></i>
          <i class="iconfont icon-visibility"></i>
        </div>
        <div class="right">|</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstComment",
  components: {},
  props: ["userInfo"],
  mounted() {},
  methods: {
    focusInput(id_name) {
      this.$store.commit("replyId", id_name);
      this.$store.commit("isFocus", true);
    },
  },
};
</script>

<style lang='less' scoped>
#first_comment {
  .userInfo {
    display: flex;
    align-items: center;
    color: #515151;
    font-size: 14px;
    img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      margin: 8px;
    }
    .user_detail {
      .rank {
        background: orange;
        color: #fff;
        font-size: 10px;
      }
    }
  }
  .comment_detail {
    padding: 0px 15px 10px 50px;
    font-size: 14px;
    .operation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .iconfont {
          margin-right: 10px;
          span {
            font-size: 10px;
            padding-left: 5px;
          }
        }
      }
    }
  }
}
</style>