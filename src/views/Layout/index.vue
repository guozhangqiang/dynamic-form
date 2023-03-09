<template>
  <div class="page-wrap">
    <nav-bar></nav-bar>
    <div class="app-wrap">
      <side-bar></side-bar>
      <div class="main-wrap">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from './navBar'
  import SideBar from './sideBar'
  import AppMain from './appMain'
  export default {
    name: "Layout",
    components: {
      NavBar,
      SideBar,
      AppMain
    }
  }
</script>

<style lang="scss" scoped>
  .page-wrap{
    display: flex;
    flex-direction: column;
    height: 100vh;
    .app-wrap{
      display: flex;
      flex-grow: 1;
      overflow: auto;
      .main-wrap{
        flex-grow: 1;
        overflow: auto;
      }
    }
  }
</style>