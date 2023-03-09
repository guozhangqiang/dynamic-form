<template>
  <div class="dynamic-form">
    <div class="left-container">
      <vue-draggable
          v-model="arr1"
          :options="dragOptions1">
        <transition-group>
          <div class="item" v-for="(item, index) in arr1" :key="index">{{item.name}}</div>
        </transition-group>
      </vue-draggable>
    </div>
    <div class="center-container">
      <vue-draggable
          group="field"
          v-model="arr2"
          :options="dragOptions2">
        <transition-group>
          <div class="item" v-for="(item, index) in arr2" :key="index">{{item.name}}</div>
        </transition-group>
      </vue-draggable>
    </div>
    <el-button @click="handleCheckData">查看数据</el-button>
    <div class="right-container"></div>
  </div>
</template>

<script>
  import VueDraggable from "vuedraggable";
  import FieldOptions from './components/index'
  export default {
    name: "Form",
    components: {
      VueDraggable
    },
    data () {
      return {
        arr1: [
          { id: 1, name: '1'},
          { id: 2, name: '2'},
          { id: 3, name: '3'},
          { id: 4, name: '4'},
        ],
        dragOptions1: {
          animation: 300,
          group: {
            name: 'field',
            pull:'clone',
            put: false
          },
          dragClass: 'dragClass',
          ghostClass: 'ghostClass',
          chosenClass: 'chosenClass',
          // 禁止拖动排序
          sort: false
        },
        arr2: [
          { id: 5, name: '5'},
          { id: 6, name: '6'},
          { id: 7, name: '7'},
          { id: 8, name: '8'},
        ],
        dragOptions2: {
          animation: 300,
          dragClass: 'dragClass',
          ghostClass: 'ghostClass',
          chosenClass: 'chosenClass',
          // 允许拖动排序
          sort: true
        },
      }
    },
    methods: {
      handleCheckData() {
        console.log(this.arr1,'------------arr1')
        console.log(this.arr2,'------------arr2')
      }
    },
    created() {
      console.log(FieldOptions,'kkkkkkkkkk')
    }
  }
</script>

<style lang="scss" scoped>
  .dynamic-form{
    display: flex;
    .left-container{
      width: 20%;
      border: 1px solid red;
    }
    .center-container{
      flex-grow: 1;
      border: 1px solid springgreen;
    }
    .right-container{
      width: 20%;
      border: 1px solid red;
    }
  }
</style>
