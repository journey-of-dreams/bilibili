<template>
  <div id="article">
    <div class="video">
      <video
        :src="
          model.content !== null
            ? require('../assets/video/また君と.mp4')
            : model.content
        "
        controls
      ></video>
    </div>
    <div class="options">
      <div class="intr-comment">
        <div
          @click="activeIndex = 0"
          class="intr"
          :class="activeIndex == 0 ? 'active' : ''"
        >
          简介
        </div>
        <div
          @click="activeIndex = 1"
          class="comment_detail"
          :class="activeIndex == 1 ? 'active' : ''"
        >
          <span class="comment">评论</span>
          <span class="comment_acount">{{ commentTotal }}</span>
        </div>
      </div>
      <div class="barrage">
        <input type="text" class="barrage_input" placeholder="点我发弹幕" />
        <i class="iconfont icon-bofangqi-danmukai"></i>
      </div>
    </div>
    <div class="detail_info" v-show="activeIndex == 0">
      <div class="userInfo-secret">
        <div class="userInfo">
          <div class="face">
            <img :src="userInfo.user_img" alt="" />
          </div>
          <div class="user_detail">
            <div class="user_name">{{ userInfo.name }}</div>
            <div class="fans-video">
              <span class="fans">1222粉丝</span>
              <span class="video">1视频</span>
            </div>
          </div>
        </div>
        <button class="secret"><span>+ 关注</span></button>
      </div>
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item :title="model.name" name="1"
          ><i class="iconfont icon-visibility-off"></i
          ><span>未经作者授权禁止转载</span></van-collapse-item
        >
      </van-collapse>
      <div class="video_info">
        <div class="broadcast">
          <i class="iconfont icon-bofang"></i>
          <span class="broadcast_acount">5.9万</span>
        </div>
        <div class="barrage2">
          <i class="iconfont icon-danmushu"></i>
          <span class="barrage_acount">876</span>
        </div>
        <div class="video_date">
          <span>2020-{{ model.date }}</span>
        </div>
      </div>
      <div class="triple">
        <div
          class="give"
          @click="activeTriple = 0"
          :class="activeTriple == 0 ? 'active' : ''"
        >
          <i class="iconfont icon-dianzan"></i><br /><span class="give_acount"
            >1048</span
          >
        </div>
        <div
          class="take"
          @click="activeTriple = 1"
          :class="activeTriple == 1 ? 'active' : ''"
        >
          <i class="iconfont icon-caishixin-"></i><br /><span
            class="take_detail"
            >不喜欢</span
          >
        </div>
        <div
          class="coin"
          @click="activeTriple = 2"
          :class="activeTriple == 2 ? 'active' : ''"
        >
          <i class="iconfont icon-toubi"></i><br /><span class="coin_acount"
            >1058</span
          >
        </div>
        <div
          class="collect"
          @click="activeTriple = 3"
          :class="activeTriple == 3 ? 'active' : ''"
        >
          <i class="iconfont icon-shoucangtianchong"></i>
          <br /><span class="collect_acount">4561</span>
        </div>
        <div
          class="share"
          @click="activeTriple = 4"
          :class="activeTriple == 4 ? 'active' : ''"
        >
          <i class="iconfont icon-forward1"></i>
          <br /><span class="share_acount">201</span>
        </div>
      </div>
      <div class="label">
        <!-- ? -->
        <span>{{ title }}</span>
      </div>
      <div class="commend">
        <detail
          class="detail_item"
          :detailItem="categoryItem"
          v-for="(categoryItem, categoryIndex) in commendList"
          :key="categoryIndex"
        ></detail>
      </div>
    </div>
    <div class="comment_info" v-show="activeIndex == 1">
      <div class="comment">
        <span class="hot_comment" v-if="isShow">热门评论</span>
        <span class="hot_comment" v-else>最新评论</span>
        <div @click="show">
          <i class="iconfont icon-shensuo"></i>
          <span v-if="isShow">按热度</span>
          <span v-else>按时间</span>
        </div>
      </div>
      <comment></comment>
    </div>
  </div>
</template>

<script>
import Detail from "./Detail";
import Comment from "@/components/article/Comment";
export default {
  name: "Article",
  components: { Detail, Comment },
  data() {
    return {
      model: {},
      userInfo: {},
      activeNames: "",
      activeIndex: 0,
      activeTriple: 0,
      commendList: [],
      commentTotal: 0,
      isShow: true,
      title: "",
    };
  },
  mounted() {},
  created() {
    this.articleItemData();
    this.commentData();
    this.userInfoData();
    this.commendData();
  },
  methods: {
    async articleItemData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      this.model = res.data[0];
      this.title = res.data[0].category.title;
    },
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      this.commentTotal = res.data.length;
    },
    async userInfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.userInfo = res.data[0];
    },
    async commendData() {
      const res = await this.$http.get("/commend/");
      this.commendList = res.data;
    },
    // 按热度还是按时间
    show() {
      this.isShow = !this.isShow;
    },
  },
  watch: {
    // 路由改变时，重新发送数据
    $route() {
      this.articleItemData();
      this.commendData();
    },
  },
};
</script>

<style lang='less' scoped>
#article {
  background: #fff;
  .iconfont {
    font-size: 26px;
  }
  .video {
    width: 100%;
    height: 200px;
    video {
      height: 100%;
      width: 100%;
    }
  }
  .options {
    color: #8f8f8f;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid rgba(156, 156, 156, 0.1);
    .intr-comment {
      display: flex;
      flex: 1;
      .intr {
        padding: 10px 5px;
        margin-left: 40px;
      }
      .comment_detail {
        padding: 10px 5px;
        margin-left: 40px;
      }
      .active {
        border-bottom: 2px solid #fa7298;
        color: #fa7298;
      }
    }
    .barrage {
      display: flex;
      align-items: center;
      flex: 1;
      .barrage_input {
        background: #f4f4f4;
        border: none;
        padding: 5px;
        width: 80px;
        margin-left: 40px;
        margin-right: 5px;
        border-radius: 10px 0 0 10px;
      }
    }
  }
  .detail_info {
    color: #8f8f8f;
    font-size: 13px;
    padding-bottom: 20px;
    .userInfo-secret {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .userInfo {
        display: flex;
        align-items: center;
        .face {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 8px;
          img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }
        .user_detail {
          .user_name {
            color: #000;
            font-size: 14px;
          }
          .fans-video {
            font-size: 12px;
            .fans {
              margin-right: 5px;
            }
            .video {
            }
          }
        }
      }
      .secret {
        background: #fa7298;
        border: none;
        color: #fff;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 3px;
      }
    }
    .video_info {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .iconfont {
        font-size: 13px;
      }
      .broadcast {
        margin-left: 10px;
      }
      .barrage2 {
        margin-left: 10px;
      }
      .video_date {
        margin-left: 10px;
      }
    }
    .triple {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-around;
      font-size: 10px;
      padding: 10px 0;
      .iconfont {
        font-size: 23px;
      }
      .active {
        color: #fa7298;
      }
    }
    .label {
      color: #000;
      span {
        margin: 8px;
        padding: 5px;
        border-radius: 6px;
        background: #f1f1f1;
      }
    }
    .commend {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 8px;
      .detail_item {
        width: 48.5%;
        margin: 0 0 8px 0;
      }
    }
  }
  .comment_info {
    .comment {
      font-size: 13px;
      color: #919191;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      .hot_comment {
        color: #000;
      }
      .iconfont {
        font-size: 14px;
        padding-right: 5px;
      }
    }
  }
}
</style>