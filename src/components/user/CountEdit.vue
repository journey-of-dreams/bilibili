<template>
  <div class="CountEdit">
    <div class="detail_edit" @click="selectPhoto">
      <div class="left">头像</div>
      <div class="right">
        <img
          :src="
            model.user_img == null
              ? require('../../assets/img/头像 男孩.svg')
              : model.user_img
          "
          alt=""
        />
        <span class="right-arrows">></span>
      </div>
    </div>
    <div class="detail_edit" @click="$router.push('/aliasedit')">
      <div class="left">昵称</div>
      <div class="right">
        <span>{{ model.name }}</span>
        <span class="right-arrows">></span>
      </div>
    </div>
    <div class="detail_edit" @click="selectSex()">
      <div class="left">性别</div>
      <div class="right">
        <span>{{ model.gender == null ? "保密" : model.gender }}</span>
        <span class="right-arrows">></span>
      </div>
    </div>
    <div class="detail_edit" @click="selectBirth">
      <div class="left">出生年月</div>
      <div class="right">
        <span>{{ birthday }}</span>
        <span class="right-arrows">></span>
      </div>
    </div>
    <div class="detail_edit" @click="$router.push('/signedit')">
      <div class="left">个性签名</div>
      <div class="right">
        <span>{{
          model.user_desc == null ? "这个人很神秘，什么都没写" : model.user_desc
        }}</span>
        <span class="right-arrows">></span>
      </div>
    </div>
    <div class="card">
      <div
        class="card_id"
        v-clipboard:copy="model.id"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        <div class="left">ID</div>
        <div class="right">
          <span>{{ model.id }}</span>
          <span class="right-arrows">></span>
        </div>
      </div>
      <div class="card_share" @click="$router.push('/myQRcode')">
        <div class="left">二维码名片</div>
        <div class="right">
          <span><img src="../../assets/img/二维码.svg" alt="" /></span>
          <span class="right-arrows">></span>
        </div>
      </div>
    </div>
    <div class="back_login" @click="$router.push('/login')">退出登录</div>
    <sex-select
      :isSexShow="isSexShow"
      ref="sex"
      @myShow="mySexShow"
      @mySex="mySex"
    ></sex-select>
    <birth-select
      :isBirthShow="isBirthShow"
      ref="birth"
      @myShow="myBirthShow"
    ></birth-select>
    <photo-select
      :isSelectPhoto="isSelectPhoto"
      ref="photo"
      @myShow="myPhotoShow"
      @loadPhoto="loadPhoto"
    ></photo-select>
  </div>
</template>

<script>
import BirthSelect from "components/common/dialog/BirthSelect.vue";
import PhotoSelect from "components/common/dialog/PhotoSelect.vue";
import SexSelect from "components/common/dialog/SexSelect";

export default {
  name: "countEdit",
  props: ["model"],
  data() {
    return {
      isSexShow: false,
      isBirthShow: false,
      isSelectPhoto: false,
      year: "",
      sex: "",
      birthday: "1990-01-01",
    };
  },
  components: { BirthSelect, PhotoSelect, SexSelect },
  methods: {
    selectSex() {
      this.isSexShow = true;
      this.$refs.sex.show("性别选择", "确定");
    },
    selectBirth() {
      this.isBirthShow = true;
      this.$refs.birth.show("生日选择", "确定");
    },
    selectPhoto() {
      this.isSelectPhoto = true;
      this.$refs.photo.show("头像选择", "取消");
    },
    myBirthShow(e) {
      this.isBirthShow = e;
      this.birthday = localStorage.getItem("birthday");
    },
    myPhotoShow(e) {
      this.isSelectPhoto = e;
    },
    loadPhoto(e) {
      this.isSelectPhoto = false;
      this.$emit("loadPhoto", e);
    },
    mySexShow(e) {
      this.isSexShow = e;
      this.$emit("mySexShow", this.sex);
    },
    mySex(sex) {
      this.sex = sex;
    },
    // 成功复制id到粘贴板
    onCopy() {
      this.$msg("ID已复制到粘贴板");
    },
    // 复制到粘贴板失败
    onError() {
      this.$msg("ID复制到粘贴板失败！");
    },
  },
};
</script>

<style lang='less' scoped>
.CountEdit {
  margin-top: 20px;
  .detail_edit {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #f5f5f5;
    font-size: 14px;
    .left {
      color: #505050;
    }
    .right {
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      .right-arrows {
        padding-left: 10px;
      }
    }
  }
  .card {
    margin-top: 20px;
    .card_id {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #f5f5f5;
      background: #fff;
      font-size: 14px;
      .left {
        color: #505050;
      }
      .right {
        color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
        .right-arrows {
          padding-left: 10px;
        }
      }
    }
    .card_share {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      background: #fff;
      font-size: 14px;
      .left {
        color: #505050;
      }
      .right {
        color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
        }
        .right-arrows {
          padding-left: 10px;
        }
      }
    }
  }
  .back_login {
    padding: 15px;
    background: #fff;
    margin-top: 20px;
    text-align: center;
    color: #505050;
    font-size: 14px;
  }
}
</style>