<template>
  <div id="detail" @click="$router.push(`/article/${detailItem.id}`)">
    <img
      :src="
        detailItem.img !== null
          ? 'https://img.imgdb.cn/item/600913c83ffa7d37b3426967.jpg'
          : detailItem.img
      "
      alt=""
    />
    <p>{{ detailItem.name }}</p>
  </div>
</template>

<script>
export default {
  name: "detail",
  props: ["detailItem"],
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
#detail {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  img {
    width: 100%;
    // height: 100%;
    display: block;
    border-radius: 5px 5px 0 0;
  }
  p {
    font-size: 13px;
    font-weight: 600;
    margin: 7px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>