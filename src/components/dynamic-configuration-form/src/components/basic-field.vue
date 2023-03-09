<template>
  <vue-draggable
      v-model="basicField"
      :options="basicFieldDragOptions"
      :move="handleMove"
      @end="handleDragEnd">
    <transition-group class="basic-field-group">
      <div
          class="basic-field-item"
          v-for="(item, index) in basicField"
          :key="index"
          @click="handleClickField(item)">
        <span class="label">{{ item.label }}</span>
      </div>
    </transition-group>
  </vue-draggable>
</template>

<script>
  import VueDraggable from "vuedraggable/src/vuedraggable";
  import FieldOptions from './field'
  import { createUUID } from '../utils/index'
  export default {
    name: "BasicField",
    components: {
      VueDraggable
    },
    props: {
      formFields: Object,
      checkedField: Object,
      fieldsArray: Array,
    },
    data() {
      return {
        basicField: FieldOptions,
        basicFieldDragOptions: {
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
        // 拖拽开始时，选中的拖拽元素object
        dragObject: {},
        // 拖拽目标元素的索引
        targetIndex: 0,
        // 是否停靠在目标元素的下方
        willInsertAfter: true
      }
    },
    methods: {
      handleClickField(item) {
        let addFieldObject = {
          ...item,
          uuid: `${createUUID()}`,
          createTimestamp: new Date().getTime()
        };
        this.$emit('add', JSON.parse(JSON.stringify(addFieldObject)));
      },
      handleMove(e) {
        console.log(e)
        this.dragObject = {
          ...e.draggedContext.element,
          uuid: `${createUUID()}`,
          createTimestamp: new Date().getTime()
        };
        this.targetIndex = e.relatedContext.index;
        this.willInsertAfter = e.willInsertAfter;
      },
      handleDragEnd(e) {
        if (e.to._prevClass === 'basic-field-group') {
          return false;
        } else if (e.to._prevClass === 'form-field-group') {
          this.$emit('dragAdd', JSON.parse(JSON.stringify(this.dragObject)), this.targetIndex, this.willInsertAfter);
        }
      },

    },
  }
</script>

<style lang="scss" scoped>
  .basic-field-group{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .basic-field-item{
      width: 100px;
      height: 36px;
      margin-top: 12px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      cursor: pointer;
      .label{
        padding-left: 12px;
        position: relative;
        top: -1px;
      }
      &:hover{
        background-image: url('../../../../assets/images/cover.png');
        background-size: 100px 36px;
      }
    }
  }
</style>
