<template>
  <div class="LoginText">
    <van-field
      :label="label"
      :placeholder="placeholder"
      :type="type"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  name: "loginText",
  props: {
    label: {
      type: String,
      default() {
        return "";
      },
    },
    placeholder: {
      type: String,
      default() {
        return "";
      },
    },
    type: {
      type: String,
      default() {
        return "";
      },
    },
    rule: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      content: "",
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleRules() {
      const rule = new RegExp(this.rule, "g");
      if (rule.test(this.content)) {
        this.$emit("inputTrue", this.content);
      }
    },
  },
  watch: {
    content() {
      this.handleRules();
    },
  },
};
</script>

<style lang='less' scoped>
.LoginText {
  border-bottom: 1px solid #ccc;
}
</style>