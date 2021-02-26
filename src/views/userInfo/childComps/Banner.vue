<template>
  <div class="Banner">
    <!-- 头像 -->
    <div class="face">
      <img
        :src="
          userInfo.user_img == null
            ? require('assets/img/头像 男孩.svg')
            : userInfo.user_img
        "
      />
    </div>
    <!-- 头像右侧部分 -->
    <div class="relation">
      <div class="count">
        <span class="fans">
          <span class="num">--</span>
          <br />
          <span class="type">粉丝</span>
        </span>
        <span class="split">|</span>
        <span class="flow">
          <span class="num">15</span>
          <br />
          <span class="type">关注</span>
        </span>
        <span class="split">|</span>
        <span class="likes">
          <span class="num">14</span>
          <br />
          <span class="type">获赞</span>
        </span>
      </div>
      <div class="follow-btn" @click="$router.push('/edit')">
        <button class="white">编辑资料</button>
      </div>
    </div>
    <!-- 头像底部到uid部分 -->
    <div class="part">
      <div class="name">
        <div class="user_name">{{ username }}</div>
        <div class="user_sex">
          <img :src="genderImg" alt="" />
        </div>
        <i class="iconfont icon-ic_userlevel_"></i>
      </div>
      <div class="sign">
        <div class="user_sign">{{ user_desc }}</div>
        <div class="user_uid_show" @click="showUid">{{ uidDetail }}</div>
      </div>
      <div class="user_uid" v-show="isShowUid">uid:355788775</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      isShowUid: false,
      uidDetail: "展开",
      user_desc: "",
      username: "",
      genderImg: "",
    };
  },
  props: ["userInfo"],
  components: {},
  mounted() {
    this.user_desc = localStorage.getItem("user_desc");
    this.username = localStorage.getItem("username");
    this.boyOrGir();
  },
  methods: {
    showUid() {
      this.isShowUid = !this.isShowUid;
      this.uidDetail = this.isShowUid ? "收起" : "展开";
    },
    async boyOrGir() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      console.log(res);
      let gender = res.data[0].gender;
      this.genderImg =
        gender == "女"
          ? require("@/assets/img/女.svg")
          : require("@/assets/img/男士.png");
    },
  },
};
</script>

<style lang='less' scoped>
.Banner {
  background: #fff;
  border-bottom: 1px #fafafa solid;
  padding: 0 15px;
  .face {
    height: 80.64px;
    position: relative;
    width: 80.64px;

    display: inline-block;
    img {
      position: absolute;
      top: -10px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .relation {
    float: right;
    font-size: 13px;
    width: 211px;
    .count {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .fans {
        display: inline-block;
        text-align: center;
      }
      .flow {
        display: inline-block;
        text-align: center;
      }
      .likes {
        display: inline-block;
        text-align: center;
      }
      .split {
        color: #eaeaea;
        display: inline-block;
        width: 1px;
        height: 15px;
      }
      .num {
      }
      .type {
        color: #999;
      }
    }
    .follow-btn {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .white {
        color: #fb799e;
        border: 1px solid #fb799e;
        background: none;
        width: 100%;
        padding: 5px 0;
        border-radius: 5px;
      }
    }
  }
  .part {
    .name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .user_name {
      }
      .user_sex {
        height: 18px;
        padding: 0 5px;
        img {
          height: 100%;
        }
      }
      .iconfont {
        color: #ffb3a6;
        font-size: 20px;
      }
    }
    .sign {
      padding-top: 9px;
      color: #a699b3;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user_sign {
      }
      .user_uid_show {
        color: #1389bf;
      }
    }
    .user_uid {
      color: #505050;
      background: #f4f4f4;
      font-size: 13px;
      display: inline;
      border-radius: 5px;
      margin: 5px 0 10px 0;
    }
  }
}
</style>