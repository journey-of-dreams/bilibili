<template>
  <div class="PhotoSelect" v-show="isSelectPhoto">
    <dialog-base
      :message="message"
      :select="select"
      :isShow="isSelectPhoto"
      @yourShow="myShow"
    >
      <div slot="left">
        <div class="take_photo">
          <van-uploader capture="camera" :after-read="afterRead"
            ><img src="@/assets/img/拍照.svg" alt=""
          /></van-uploader>
          <span>拍照</span>
        </div>
      </div>
      <div slot="center">
        <div class="picture_home">
          <van-uploader :after-read="afterRead">
            <img src="@/assets/img/图片.svg" alt=""
          /></van-uploader>
          <span>图片库</span>
        </div>
      </div>
      <div slot="right">
        <div class="random">
          <img src="@/assets/img/随机.svg" alt="" @click="randomPhoto" />
          <span>随机</span>
        </div>
      </div>
    </dialog-base>
  </div>
</template>

<script>
import DialogBase from "../dialog/DialogBase.vue";

export default {
  name: "photoSelect",
  components: { DialogBase },
  props: ["isSelectPhoto"],
  data() {
    return {
      message: "",
      select: "",
      photoList: [
        "https://img.imgdb.cn/item/601064343ffa7d37b3c708d7.jpg",
        "https://img.imgdb.cn/item/600913d43ffa7d37b34272ba.jpg",
        "https://img.imgdb.cn/item/600913d53ffa7d37b342730f.jpg",
        "https://img.imgdb.cn/item/600913c83ffa7d37b3426962.jpg",
        "https://img.imgdb.cn/item/600913c83ffa7d37b3426971.jpg",
      ],
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
    },
    async afterRead(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      const res = await this.$http.post("/upload", formData);
      this.$emit("loadPhoto", res.data.url);
    },
    randomPhoto() {
      let index = Math.floor(Math.random() * 5);
      this.$emit("loadPhoto", this.photoList[index]);
    },
  },
};
</script>

<style lang='less' scoped>
.PhotoSelect {
  .take_photo {
    font-size: 13px;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      height: 30px;
      display: block;
      border-radius: 8px;
    }
  }
  .picture_home {
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px 0;
    img {
      height: 30px;
      display: block;
      border-radius: 8px;
    }
  }
  .random {
    font-size: 13px;
    padding: 15px 0;
    text-align: center;
    img {
      display: block;
      border-radius: 8px;
      height: 30px;
    }
  }
}
</style>