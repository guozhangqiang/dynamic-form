<template>
  <div class="app-main-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "AppMain",
    data () {
      return {

      }
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  .app-main-wrap{
    background: #e9eef3;
    height: 100%;
    overflow: auto;
  }
</style>
