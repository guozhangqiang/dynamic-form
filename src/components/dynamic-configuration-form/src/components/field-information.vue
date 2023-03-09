<template>
  <div class="field-information">
    <div v-if="checkedField.hasOwnProperty('uuid')">
      <h3>
        <span>{{ formFields[checkedField.uuid].title }}</span>
        <el-tooltip placement="bottom" popper-class="field-information-tooltip-container">
          <div slot="content">
            {{formFields[checkedField.uuid].description}}
          </div>
          <span class="help-tips-icon"><i class="el-icon-question"></i></span>
        </el-tooltip>
      </h3>
      <el-form :model="formFields[checkedField.uuid]">
        <!----------------------标题------------------------>
        <el-form-item>
          <div>
            <span>标题</span>
            <el-tooltip placement="bottom" popper-class="field-information-tooltip-container">
              <div slot="content">
                标题用于告诉填写者应该在该字段中输入什么样的内容。通常是一个词语或词组，也可以是一个问题。
              </div>
              <span class="help-tips-icon"><i class="el-icon-question"></i></span>
            </el-tooltip>
          </div>
          <el-input v-model="formFields[checkedField.uuid].label" placeholder="请输入标题"></el-input>
        </el-form-item>
        <!----------------------提示------------------------>
        <el-form-item>
          <div>
            <span>提示</span>
            <el-tooltip placement="bottom" popper-class="field-information-tooltip-container">
              <div slot="content">
                提示属性用于指定对该模块进行一些附加说明，一般用来指导填写者输入。
              </div>
              <span class="help-tips-icon"><i class="el-icon-question"></i></span>
            </el-tooltip>
          </div>
          <el-input v-model="formFields[checkedField.uuid].helpTips" placeholder="请输入提示"></el-input>
        </el-form-item>
        <!----------------------选项内容------------------------>
        <el-form-item v-if="['SELECT', 'RADIO', 'CHECKBOX'].includes(formFields[checkedField.uuid].overviewType)">
          <div>
            <span>选项内容</span>
            <el-tooltip
                placement="bottom"
                popper-class="field-information-tooltip-container">
              <div slot="content">
                为选择组件提供具体内容（可以添加“其他”选项，用作选项不符时的自定义填写），
                可以自定义编辑、增删、批量编辑选项。
              </div>
              <span class="help-tips-icon"><i class="el-icon-question"></i></span>
            </el-tooltip>
          </div>
          <vue-draggable
              handle=".mover"
              v-model="formFields[checkedField.uuid].options"
              :options="optionsDragOptions">
            <transition-group class="form-field-options-group">
              <div
                  class="field-options-item"
                  v-for="(item, index) in formFields[checkedField.uuid].options"
                  :key="index">
                <el-input v-model="item.optValue"></el-input>
                <span class="field-options-icon" @click="handleDeleteOption(index)"><i class="el-icon-delete"></i></span>
                <span class="mover field-options-icon"><i class="el-icon-s-operation"></i></span>
              </div>
            </transition-group>
          </vue-draggable>
          <el-button class="add-new-option-btn" type="primary" icon="el-icon-circle-plus" @click="handleAddNewOption">添加新选项</el-button>
        </el-form-item>
        <!----------------------显示格式------------------------>
        <el-form-item v-if="['DATE', 'DATERANGE'].includes(formFields[checkedField.uuid].overviewType)">
          <div>
            <span>显示格式</span>
            <el-tooltip
                placement="bottom"
                popper-class="field-information-tooltip-container">
              <div slot="content">
                为时间组件提供具体时间格式。
              </div>
              <span class="help-tips-icon"><i class="el-icon-question"></i></span>
            </el-tooltip>
          </div>
          <el-select
              filterable
              v-model="formFields[checkedField.uuid].format"
              @change="handleChangeFormat">
            <el-option
                v-for="item in formFields[checkedField.uuid].formatOption"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!----------------------默认内容------------------------>
        <el-form-item>
          <div>
            <span>默认内容</span>
            <el-tooltip
                placement="bottom"
                popper-class="field-information-tooltip-container">
              <div slot="content">
                设置默认内容后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。
              </div>
              <span class="help-tips-icon"><i class="el-icon-question"></i></span>
            </el-tooltip>
          </div>
          <div v-if="['INPUT'].includes(formFields[checkedField.uuid].overviewType)">
            <el-input
                :key="formFields[checkedField.uuid].createTimestamp"
                v-model="formFields[checkedField.uuid].defaultValue"
                placeholder="请输入默认内容"
                @change="handleChange">
            </el-input>
          </div>
          <div v-else-if="['TEXTAREA'].includes(formFields[checkedField.uuid].overviewType)">
            <el-input
                :key="formFields[checkedField.uuid].createTimestamp"
                type="textarea"
                :autosize="{ minRows: 4}"
                v-model="formFields[checkedField.uuid].defaultValue"
                placeholder="请输入默认内容"
                @change="handleChange">
            </el-input>
          </div>
          <div v-else-if="['SELECT', 'RADIO', 'CHECKBOX'].includes(formFields[checkedField.uuid].overviewType)">
            <el-select
                :key="formFields[checkedField.uuid].createTimestamp"
                filterable
                v-model="formFields[checkedField.uuid].defaultValue"
                :multiple="formFields[checkedField.uuid].overviewType === 'CHECKBOX'"
                @change="handleChange">
              <el-option
                  v-for="item in formFields[checkedField.uuid].options"
                  :key="item.tempId"
                  :label="item.optValue"
                  :value="item.tempId">
              </el-option>
            </el-select>
          </div>
          <div v-else-if="['DATE'].includes(formFields[checkedField.uuid].overviewType)">
            <el-date-picker
                :key="formFields[checkedField.uuid].createTimestamp"
                v-model="formFields[checkedField.uuid].defaultValue"
                :type="formFields[checkedField.uuid].formatType"
                :value-format="formFields[checkedField.uuid].format"
                :format="formFields[checkedField.uuid].format"
                placeholder="选择日期"
                @change="handleChange">
            </el-date-picker>
          </div>
          <div v-else-if="['DATERANGE'].includes(formFields[checkedField.uuid].overviewType)">
            <el-date-picker
                :key="formFields[checkedField.uuid].createTimestamp"
                v-model="formFields[checkedField.uuid].defaultValue"
                :type="formFields[checkedField.uuid].formatType"
                :value-format="formFields[checkedField.uuid].format"
                :format="formFields[checkedField.uuid].format"
                placeholder="选择日期"
                @change="handleChange">
            </el-date-picker>
          </div>
        </el-form-item>
        <!----------------------字段占比%------------------------>
        <el-form-item>
          <div>
            <span>字段占比%</span>
            <el-tooltip
                placement="bottom"
                popper-class="field-information-tooltip-container">
              <div slot="content">
                配置表单布局，可以单行多字段排布。
              </div>
              <span class="help-tips-icon"><i class="el-icon-question"></i></span>
            </el-tooltip>
          </div>
          <el-button-group class="width-button-group">
            <el-button
                v-for="(item, index) in width"
                :key="index"
                :class="{
                  checked: formFields[checkedField.uuid].width === item
                }"
                @click="formFields[checkedField.uuid].width = item">
              {{item}}
            </el-button>
          </el-button-group>
        </el-form-item>
        <!----------------------其他属性------------------------>
        <el-form-item>
          <el-checkbox v-model="formFields[checkedField.uuid].required">
            <span>这个是必填项</span>
            <el-tooltip
                placement="bottom"
                popper-class="field-information-tooltip-container">
              <div slot="content">
                选择必填后，填写者不填写将无法提交表单
              </div>
              <span class="help-tips-icon"><i class="el-icon-question"></i></span>
            </el-tooltip>
          </el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import VueDraggable from "vuedraggable/src/vuedraggable";
  export default {
    name: "FieldInformation",
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
        optionsDragOptions: {
          animation: 300,
          dragClass: 'dragClass',
          ghostClass: 'ghostClass',
          chosenClass: 'chosenClass',
          // 允许拖动排序
          sort: true
        },
        width: [25, 50, 75, 100]
      }
    },
    methods: {
      handleAddNewOption() {
        this.$emit('addOptions', this.checkedField.uuid);
      },
      handleDeleteOption(index) {
        this.$emit('delOptions', this.checkedField.uuid, index);
      },
      handleChangeFormat(value) {
        this.$emit('changeFormat', this.checkedField.uuid, value);
      },
      handleChange() {
        this.$emit('setValue', this.checkedField.uuid);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .field-information{
    padding: 20px;
    .help-tips-icon{
      margin-left: 4px;
      cursor: pointer;
    }
    .form-field-options-group{
      .field-options-item{
        border: 1px solid #DCDFE6;
        margin-bottom: 12px;
        padding-right: 6px;
        display: flex;
        .field-options-icon{
          cursor: pointer;
          .el-icon-delete,.el-icon-s-operation{
            padding: 4px;
            border-radius: 4px;
            &:hover{
              background: #e6e7e9;
            }
          }
        }
        ::v-deep .el-input__inner{
          border: none;
        }
      }
    }
    .add-new-option-btn{
      width: 100%;
    }
    .width-button-group{
      display: flex;
      ::v-deep .el-button{
        width: 25%;
        padding: 12px 0;
      }
      .checked{
        color: #409EFF;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
    }
    ::v-deep .el-date-editor{
      width: 100%;
    }
  }
</style>
<style lang="scss">
  .field-information-tooltip-container{
    max-width: 250px;
    line-height: 18px;
  }
</style>
