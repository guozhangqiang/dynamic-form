<template>
  <div class="dynamic-form">
    <div @click="handleSave" style="display: flex;justify-content: center">
      <el-button>保存</el-button>
    </div>
    <div class="form-container">
      <div class="left-container">
        <basic-field
            :formFields="formFields"
            :fieldsArray="fieldsArray"
            :checkedField="checkedField"
            @check="SET_CHECKED_FIELD"
            @add="ADD_FORM_FIELD"
            @dragAdd="DRAG_ADD_FORM_FIELD">
        </basic-field>
      </div>
      <div class="center-container">
        <form-field
            :formFields="formFields"
            :fieldsArray="fieldsArray"
            :checkedField="checkedField"
            @check="SET_CHECKED_FIELD"
            @copy="COPY_FORM_FIELD"
            @delete="DELETE_FORM_FIELD"
            @refresh="SET_FIELD_ARRAY">
        </form-field>
      </div>
      <div class="right-container">
        <field-information
            :formFields="formFields"
            :fieldsArray="fieldsArray"
            :checkedField="checkedField"
            @addOptions="ADD_OPTIONS"
            @delOptions="DEL_OPTIONS"
            @changeFormat="CHANGE_FORMAT"
            @setValue="SET_VALUE"
        ></field-information>
      </div>
    </div>
  </div>
</template>

<script>
  import BasicField from './components/basic-field'
  import FormField from './components/form-field'
  import FieldInformation from './components/field-information'
  import { deepClone } from './utils/index'
  export default {
    name: "DynamicConfigurationForm",
    components: {
      BasicField,
      FormField,
      FieldInformation
    },
    data () {
      return {
        formFields: {},
        fieldsArray: [],
        checkedField: {},
      }
    },
    methods: {
      //  添加元素，点击添加，直接push
      ADD_FORM_FIELD(value) {
        this.formFields[value.uuid] = value;
        this.checkedField = value;
        this.fieldsArray.push(value);
      },
      //  添加元素，拖拽添加，因为拖拽会默认添加一个原始元素，不带有uuid，
      //  所以先插入带有uuid的元素，再过滤掉原始元素
      //  还需要注意，是停靠在目标元素的上方还是下方
      DRAG_ADD_FORM_FIELD(value, targetIndex, willInsertAfter) {
        this.formFields[value.uuid] = value;
        this.checkedField = value;
        if (targetIndex === undefined) {
          this.fieldsArray.push(value);
          this.fieldsArray = this.fieldsArray.filter(item => item.hasOwnProperty('uuid'));
        } else {
          if (willInsertAfter) {
            this.fieldsArray.splice(targetIndex + 1, 0, value);
            this.fieldsArray = this.fieldsArray.filter(item => item.hasOwnProperty('uuid'));
          } else {
            this.fieldsArray.splice(targetIndex, 0, value);
            this.fieldsArray = this.fieldsArray.filter(item => item.hasOwnProperty('uuid'));
          }
        }
      },
      //  设置选中的目标
      SET_CHECKED_FIELD(value) {
        this.checkedField = value;
      },
      //  删除某个表单字段元素，需要注意的是，如果删除的是选中的目标，还得多做处理
      DELETE_FORM_FIELD(value, index) {
        delete this.formFields[value.uuid];
        this.fieldsArray.splice(index, 1);
        if (this.checkedField.uuid === value.uuid) {
          this.checkedField = {};
        }
      },
      //  复制元素，插入到被复制元素的下一个
      COPY_FORM_FIELD(value, index) {
        this.formFields[value.uuid] = value;
        this.checkedField = value;
        this.fieldsArray.splice(index + 1, 0, value);
      },
      SET_FIELD_ARRAY(value) {
        this.fieldsArray = value;
      },
      //  下拉选择、单项选择、多项选择添加options方法
      ADD_OPTIONS(uuid) {
        this.formFields[uuid].optionTempId ++;
        this.formFields[uuid].options.push({
          optValue: '未命名',
          tempId: -this.formFields[uuid].optionTempId
        })
      },
      //  下拉选择、单项选择、多项选择删除options方法
      DEL_OPTIONS(uuid, index) {
        this.formFields[uuid].options.splice(index, 1);
      },
      //  日期选择、起止时间选择改变日期格式方法
      CHANGE_FORMAT(uuid, value) {
        this.formFields[uuid].defaultValue = '';
        this.checkedField.defaultValue = '';
        this.formFields[uuid].formatType = this.formFields[uuid].formatOption.filter(item => value === item.value)[0].type
      },
      //  给字段赋值，赋值即为赋默认值
      SET_VALUE(uuid) {
        this.formFields[uuid].value = this.formFields[uuid].defaultValue;
      },
      //  保存，抛出数据，注意深克隆
      handleSave() {
        let formFields = deepClone(this.formFields);
        let fieldsArray = deepClone(this.fieldsArray);
        let checkedField = deepClone(this.checkedField);
        this.$emit('save', formFields, fieldsArray, checkedField)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dynamic-form{
    display: flex;
    flex-direction: column;
    height: 100%;
    .form-container{
      display: flex;
      height: calc(100% - 40px);
      min-width: 1080px;
      .left-container{
        width: 240px;
        background: white;
      }
      .center-container{
        flex-grow: 1;
        height: 100%;
        overflow: auto;
        &>div{
          width: 90%;
          margin: 0 auto;
          max-width: 800px;
          height: 100%;
          background: white;
        }
      }
      .right-container{
        width: 240px;
        height: 100%;
        background: white;
        overflow: auto;
      }
    }
  }
</style>
