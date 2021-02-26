<template>
  <div id="home">
    <!-- 最顶部栏 -->
    <home-nav-bar></home-nav-bar>
    <!--导航栏  -->
    <van-tabs
      v-model="active"
      sticky
      offset-top="45"
      color="#f7779b"
      swipeable
      title-active-color="#f7779b"
      title-inactive-color="#777777"
    >
      <van-tab
        replace
        to="/home"
        :title="item.title"
        v-for="(item, index) in category"
        :key="index"
      >
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" class="swiper_wrap" indicator-color="#fff">
          <van-swipe-item
            v-for="(image, index) in swiperImgs"
            :key="index"
            class="wrap_item"
          >
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <!-- 文章滚动加载更多 -->
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          :immediate-check="false"
          @load="onLoad"
        >
          <!-- 中间文章 -->
          <div class="detail_parent">
            <detail
              class="detail_item"
              :detailItem="categoryItem"
              v-for="(categoryItem, categoryIndex) in item.list"
              :key="categoryIndex"
            ></detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeNavBar from "@/components/user/HomeNavBar";
import Detail from "./Detail";
export default {
  name: "home",
  components: { HomeNavBar, Detail },
  data() {
    return {
      active: 0,
      category: [],
      swiperImgs: [
        "https://img.imgdb.cn/item/60217daf3ffa7d37b3d7008c.jpg",
        "https://img.imgdb.cn/item/60217d993ffa7d37b3d6fa2b.jpg",
        "https://img.imgdb.cn/item/60217d653ffa7d37b3d6e8a1.jpg",
        "https://img.imgdb.cn/item/60217d553ffa7d37b3d6e2f0.jpg",
      ],
    };
  },
  mounted() {},
  methods: {
    // 请求导航栏分类数据
    async selectCategory() {
      const res = await this.$http.get("/category");
      this.changeCategory(res.data);
      // this.category = res.data;
      // console.log(res);
    },
    // 为导航栏每一项添加一个list数组，用于存取页数与页容量，然后存入category中
    changeCategory(data) {
      let category1 = data.map((item) => {
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        item.finished = false;
        item.loading = false;
        return item;
      });
      this.category = category1;
      this.selectArticle();
    },
    // 根据导航栏每一项的不同请求不同的数据
    async selectArticle() {
      const categoryItem = this.category[this.active];
      const res = await this.$http.get("/detail/" + categoryItem._id, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pagesize,
        },
      });
      // 将请求到的每一项数据存入list数组中
      categoryItem.list.push(...res.data);
      categoryItem.loading = false;
      if (res.data.length < categoryItem.pagesize) {
        categoryItem.finished = true;
      }
      console.log(categoryItem.list);
    },
    // 滚动到底部，获取更多数据
    onLoad() {
      const categoryItem = this.category[this.active];
      categoryItem.page += 1;
      setTimeout(() => {
        this.selectArticle();
      }, 1000);
      console.log(categoryItem);
    },
  },
  created() {
    this.selectCategory();
  },
  watch: {
    active() {
      this.selectArticle();
    },
  },
};
</script>

<style lang='less' scoped>
#home {
  .iconfont {
    font-size: 21px;
    font-weight: 400;
    span {
      font-size: 14px;
    }
  }
  .swiper_wrap {
    height: 150px;
    margin: 10px 8px 0 8px;
    padding-bottom: 8px;
    background: #fff;
    .wrap_item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .detail_parent {
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
</style>