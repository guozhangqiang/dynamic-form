<template>
  <div
      class="side-wrap"
      :class="{
        isCollapse: isCollapse === true,
        notCollapse: isCollapse === false,
      }"
  >
    <div class="collapse-row">
      <span class="collapse-icon" v-if="isCollapse" @click="handleSideCollapse"><i class="el-icon-s-unfold"></i></span>
      <span class="collapse-icon" v-else @click="handleSideCollapse"><i class="el-icon-s-fold"></i></span>
    </div>
    <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
    >
      <div v-for="(item, index) in menuList" :key="index">
        <el-submenu :index="item.name" v-if="item.dropdown">
          <template slot="title">
            <span class="menu-icon"><i class="el-icon-setting"></i></span>
            <span v-if="!isCollapse">{{item.meta.title}}</span>
          </template>
          <div v-for="(subItem, subIndex) in item.children" :key="subIndex">
            <router-link :to="`${item.path}/${subItem.path}`">
              <el-menu-item :index="`${item.path}/${subItem.path}`">
                <span class="menu-icon"><i class="el-icon-setting"></i></span>
                <span slot="title">{{subItem.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </div>
        </el-submenu>
        <router-link :to="`${item.path}/${item.children[0].path}`" v-else>
          <el-menu-item :index="item.children[0].path">
            <span class="menu-icon"><i class="el-icon-setting"></i></span>
            <span slot="title" v-if="!isCollapse">{{item.meta.title}}</span>
          </el-menu-item>
        </router-link>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {
        isCollapse: false, // 是否收起
        menuList: []
      }
    },
    methods: {
      init() {
        this.menuList = JSON.parse(sessionStorage.getItem('menuList'));
        this.menuList = this.menuList.filter(item => item.hidden !== true);
      },
      handleSideCollapse() {
        this.isCollapse = !this.isCollapse;
      },
    },
    created() {
      this.init();
    }
  }
</script>

<style lang="scss" scoped>
  .side-wrap{
    background: #ffffff;
    overflow: auto;
    .collapse-row{
      height: 36px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      .collapse-icon{
        cursor: pointer;
      }
    }
  }
  .isCollapse{
    width: 64px;
    transition: all 0.2s;
  }
  .notCollapse{
    width: 280px;
    transition: all 0.2s;
  }
</style>
