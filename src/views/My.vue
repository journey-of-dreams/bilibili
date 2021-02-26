<template>
  <div id="my">
    <div class="top_right">
      <i class="iconfont icon-visibility"></i>
      <i class="iconfont icon-pifu-copy-copy"></i>
      <i class="iconfont icon-yueliang"></i>
    </div>
    <div class="user_info">
      <div class="left">
        <img
          :src="
            model.user_img
              ? model.user_img
              : require('../assets/img/头像 男孩.svg')
          "
          alt=""
        />
        <div>
          <span class="name"
            >{{ model.name == null ? "热心网民" : model.name
            }}<i class="iconfont icon-ic_userlevel_"></i
          ></span>
          <span class="vip">正式会员</span>
          <div class="coin_account">
            <span>B币：0.0</span> <span>硬币：256</span>
          </div>
        </div>
      </div>
      <div class="right" @click="$router.push('./userInfo')">
        <span>空间</span>
        <i class="iconfont icon--arrow-left"></i>
      </div>
    </div>
    <div class="fans">
      <div class="fans_item">
        <span class="fans_account">12</span><span>动态</span>
      </div>
      <span class="split">|</span>
      <div class="fans_item">
        <span class="fans_account">15</span><span>关注</span>
      </div>
      <span class="split">|</span>
      <div class="fans_item">
        <span class="fans_account">32</span><span>粉丝</span>
      </div>
    </div>
    <div class="video">
      <div class="video_item">
        <i class="iconfont icon-lixianhuancun"></i><span>离线缓存</span>
      </div>
      <div class="video_item">
        <i class="iconfont icon-lishijilu"></i><span>历史记录</span>
      </div>
      <div class="video_item">
        <i class="iconfont icon-shoucang1"></i><span>我的收藏</span>
      </div>
      <div class="video_item">
        <i class="iconfont icon-shaohouzaikanx"></i><span>稍后再看</span>
      </div>
    </div>
    <span class="title">推荐服务</span>
    <div class="commend_service">
      <div class="commend_item">
        <i class="iconfont icon-kecheng"></i><span>我的课程</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-mianliuliangfuwu"></i><span>免流量服务</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-pifu-copy-copy"></i><span>个性装扮</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-hongbao"></i><span>邀好友赚红包</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-youxi"></i><span>游戏中心</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-qianbao"></i><span>我的钱包</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-gouwu"></i><span>会员购中心</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-icon_dingdao_zhibozhongxin"></i
        ><span>直播中心</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-icon_dingdao_chuangzuozhongxin"></i
        ><span>创作中心</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-fankui"></i><span>反馈论坛</span>
      </div>
      <div class="commend_item">
        <i class="iconfont icon-shentichongneng"></i><span>充能领福利</span>
      </div>
    </div>
    <span class="title">更多服务</span>
    <div class="more">
      <div class="more_service">
        <div class="more_item">
          <i class="iconfont icon-fuwupingjia-kefu-select-copy"></i
          ><span>联系客服</span>
        </div>
        <i class="iconfont icon--arrow-left"></i>
      </div>
      <div class="more_service">
        <div class="more_item">
          <i class="iconfont icon-ketang-01"></i><span>课堂模式</span>
        </div>
        <i class="iconfont icon--arrow-left"></i>
      </div>
      <div class="more_service">
        <div class="more_item">
          <i class="iconfont icon-yusan"></i><span>青少年模式</span>
        </div>
        <i class="iconfont icon--arrow-left"></i>
      </div>
      <div class="more_service">
        <div class="more_item">
          <i class="iconfont icon-shezhi1"></i><span>设置</span>
        </div>
        <i class="iconfont icon--arrow-left"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  components: {},
  data() {
    return {
      model: {},
    };
  },
  mounted() {},
  created() {
    this.userInfoData();
  },
  methods: {
    async userInfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      console.log(res);
      this.model = res.data[0];
      console.log(this.model);
    },
  },
};
</script>

<style lang='less' scoped>
#my {
  color: #9e9e9e;
  background: #fff;
  padding: 10px 10px 50px 10px;
  .top_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .iconfont {
      font-size: 24px;
      margin-left: 15px;
    }
  }
  .user_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        display: block;
      }
      .name {
        color: #000;
        font-size: 15px;

        .iconfont {
          font-size: 21px;
          color: #ffb278;
          padding-left: 3px;
        }
      }
      .vip {
        border: 1px solid #fb81a2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        font-size: 9px;
        padding: 1px;
        color: #fb81a2;
        margin: 5px 0;
      }
      .coin_account {
        font-size: 9px;
      }
    }
    .right {
      font-size: 10px;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 15px;
        padding-left: 4px;
      }
    }
  }
  .fans {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .fans_item {
      margin: 10px 0;
      span {
        display: block;
        text-align: center;
        font-size: 12px;
      }
      .fans_account {
        color: #000;
        font-size: 15px;
      }
    }
  }
  .video {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
    .video_item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 13px;
      color: #000;
      .iconfont {
        color: #50aee4;
        font-size: 25px;
        padding-bottom: 5px;
      }
    }
  }
  .title {
    color: #000;
    display: block;
    font-weight: 600;
    font-size: 13px;
  }
  .commend_service {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .commend_item {
      padding: 10px 0;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .iconfont {
        font-size: 21px;
        color: #fb81a2;
      }
      span {
        font-size: 10px;
        color: #000;
      }
    }
  }
  .more {
    .more_service {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .more_item {
        color: #000;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        .iconfont {
          color: #fb81a2;
          font-size: 20px;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>