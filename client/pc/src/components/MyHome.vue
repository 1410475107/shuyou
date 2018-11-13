<template>
    <div class="hello">
        <h1>获取相关信息</h1>
        <ol>
            <li v-for="k in list" :key="k.id">{{k.id}},{{k.kw}}</li>
        </ol>
    </div>
</template>

<script>
export default {
  name: "MyHome",
  data() {
    return {
      list: [{ id: 1, kw: "华为手机" }, { id: 2, kw: "三只松鼠" }]
    };
  },
  mounted() {
    let _this = this;
    //发起ajax请求 Vue.prototype.$http = Axios
    _this.$http
      .get("/getkw")
      .then(function(res) {
        console.log(res);
        _this.list = res.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style scoped>
</style>
