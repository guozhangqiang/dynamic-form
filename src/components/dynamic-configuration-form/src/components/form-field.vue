<template>
  <vue-draggable
      group="field"
      v-model="_fieldsArray"
      :options="formFieldDragOptions">
    <transition-group class="form-field-group">
      <div
          class="form-field-item"
          :class="{
            checked: checkedField.uuid === item.uuid,
          }"
          :style="{
            width: `${item.width}%`
          }"
          v-for="(item, index) in _fieldsArray"
          :key="index"
          @click="handleClickField(item)"
          @mouseover="handleMouseOver(index)"
          @mouseout="handleMouseOut">
        <template v-if="item.type === 'INPUT_TEXT'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-input
                  v-model="item.defaultValue"
                  type="text"
                  :placeholder="item.placeholder"
                  readonly>
              </el-input>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'INPUT_TEXTAREA'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-input
                  v-model="item.defaultValue"
                  type="textarea"
                  :placeholder="item.placeholder"
                  readonly
                  :autosize="{ minRows: 4}">
              </el-input>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'INPUT_NUMBER'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-input
                  v-model="item.defaultValue"
                  type="text"
                  :placeholder="item.placeholder"
                  readonly>
              </el-input>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'DATE'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-date-picker
                  v-model="item.defaultValue"
                  :type="item.formatType"
                  :placeholder="item.placeholder"
                  :value-format="item.format"
                  :format="item.format"
                  readonly>
              </el-date-picker>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'DATERANGE'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-date-picker
                  v-model="item.defaultValue"
                  :type="item.formatType"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :value-format="item.format"
                  :format="item.format"
                  readonly>
              </el-date-picker>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'INPUT_PHONE'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-input
                  v-model="item.defaultValue"
                  type="text"
                  :placeholder="item.placeholder"
                  readonly>
              </el-input>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'EMAIL'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-input
                  v-model="item.defaultValue"
                  type="text"
                  :placeholder="item.placeholder"
                  readonly>
              </el-input>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'SELECT'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-select
                  v-model="item.defaultValue"
                  placeholder="请选择"
                  readonly>
                <el-option
                    v-for="subItem in item.options"
                    :key="subItem.tempId"
                    :label="subItem.optValue"
                    :value="subItem.tempId">
                </el-option>
              </el-select>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'RADIO'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-radio-group v-model="item.defaultValue">
                <el-radio
                    v-for="(subItem, subIndex) in item.options"
                    :key="subIndex"
                    :label="subItem.tempId">
                  {{subItem.optValue}}
                </el-radio>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'CHECKBOX'">
          <div class="item-container">
            <span>{{ item.label }}</span>
            <p class="help-tips">{{ item.helpTips }}</p>
            <div class="field-container">
              <div class="popover"></div>
              <el-checkbox-group v-model="item.defaultValue">
                <el-checkbox
                    v-for="(subItem, subIndex) in item.options"
                    :key="subIndex"
                    :label="subItem.tempId">
                  {{subItem.optValue}}
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </template>
        <template>
          <div class="edit-icon" :class="{'icon-show': checkedField.uuid === item.uuid}">
            <i
                title="复制"
                class="el-icon-copy-document"
                @click.stop="handleCopyField(item, index)"></i>
            <el-divider direction="vertical"></el-divider>
            <i
                title="删除"
                class="el-icon-delete"
                @click.stop="handleDeleteField(item, index)"></i>
          </div>
        </template>
      </div>
    </transition-group>
  </vue-draggable>
</template>

<script>
  import VueDraggable from "vuedraggable/src/vuedraggable";
  import { createUUID } from '../utils/index'
  export default {
    name: "FormField",
    components: {
      VueDraggable
    },
    props: {
      formFields: Object,
      checkedField: Object,
      fieldsArray: Array,
    },
    computed: {
      // VueDraggable拖拽的时候无法直接读取vuex里面的数据，所以需要重写数据
      _fieldsArray: {
        get() {
          return this.fieldsArray;
        },
        set(value) {
          this.$emit('refresh', value);
        }
      }
    },
    data() {
      return {
        formFieldDragOptions: {
          animation: 300,
          dragClass: 'dragClass',
          ghostClass: 'ghostClass',
          chosenClass: 'chosenClass',
          // 允许拖动排序
          sort: true
        },
        // 移入元素的index，用于显示复制、删除按钮
        hoverIndex: -1
      }
    },
    methods: {
      handleCopyField(item, index) {
        let addFieldObject = {
          ...item,
          uuid: `${createUUID()}`,
          createTimestamp: new Date().getTime()
        };
        this.$emit('copy', JSON.parse(JSON.stringify(addFieldObject)), index);
      },
      handleDeleteField(item, index) {
        this.$emit('delete',JSON.parse(JSON.stringify(item)), index);
      },
      handleClickField(item) {
        this.$emit('check',JSON.parse(JSON.stringify(item)));
      },
      handleMouseOver(index) {
        this.hoverIndex = index;
      },
      handleMouseOut() {
        this.hoverIndex = -1
      },
    }
  }
</script>

<style lang="scss" scoped>
  .form-field-group{
    display: block;
    height: calc(100% - 24px);
    padding: 12px;
    overflow: auto;
    .form-field-item{
      position: relative;
      &:hover{
        background-color: #fafafa;
        .edit-icon{
          display: flex;
        }
      }
      .item-container{
        cursor: move;
        padding: 12px;
        .field-container{
          position: relative;
          height: 100%;
          .popover{
            width: 100%;
            height: 100%;
            background: transparent;
            position: absolute;
            z-index: 9;
          }
        }
        .help-tips{
          font-size: 12px;
          color: #999999;
        }
        /*日期、起止时间选择器宽度*/
        ::v-deep .el-date-editor{
          width: 100%;
        }
        /*下拉选择选择器宽度*/
        ::v-deep .el-select{
          width: 100%;
        }
      }
      .edit-icon{
        position: absolute;
        right: 12px;
        top: 0;
        padding: 4px;
        border-radius: 4px;
        display: none;
        align-items: center;
        cursor: pointer;
      }
      .edit-icon.icon-show{
        display: flex;
      }
    }
    .form-field-item.checked{
      background-color: #eff3fd;
    }
  }
</style>
