<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-row :gutter="20">
      <el-col
          class="form-col"
          v-for="(item, index) in fields"
          :key="index"
          :span="(item.width/100) * 24"
      >
        <el-form-item
          prop="email"
          :label="item.label"
          :rules="[
            { required: item.required, message: `${item.label}不能为空`, trigger: 'blur' }
          ]"
        >
          <div v-if="['INPUT'].includes(item.overviewType)">
            <el-input
                :key="item.createTimestamp"
                v-model="item.value"
                :placeholder="item.placeholder">
            </el-input>
          </div>
          <div v-else-if="['TEXTAREA'].includes(item.overviewType)">
            <el-input
                :key="item.createTimestamp"
                type="textarea"
                :autosize="{ minRows: 4}"
                v-model="item.value"
                :placeholder="item.placeholder">
            </el-input>
          </div>
          <div v-else-if="['SELECT'].includes(item.overviewType)">
            <el-select
                :key="item.createTimestamp"
                filterable
                v-model="item.value"
                :placeholder="item.placeholder"
            >
              <el-option
                  v-for="(subItem, subIndex) in item.options"
                  :key="subIndex"
                  :label="subItem.optValue"
                  :value="subItem.tempId">
              </el-option>
            </el-select>
          </div>
          <div v-else-if="['RADIO'].includes(item.overviewType)">
            <el-radio-group v-model="item.value">
              <el-radio
                  v-for="(subItem, subIndex) in item.options"
                  :key="subIndex"
                  :label="subItem.tempId">
                {{subItem.optValue}}
              </el-radio>
            </el-radio-group>
          </div>
          <div v-else-if="['CHECKBOX'].includes(item.overviewType)">
            <el-checkbox-group v-model="item.value">
              <el-checkbox
                  v-for="(subItem, subIndex) in item.options"
                  :key="subIndex"
                  :label="subItem.tempId">
                {{subItem.optValue}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
          <div v-else-if="['DATE'].includes(item.overviewType)">
            <el-date-picker
                :key="item.createTimestamp"
                v-model="item.value"
                :type="item.formatType"
                :value-format="item.format"
                :format="item.format"
                placeholder="选择日期">
            </el-date-picker>
          </div>
          <div v-else-if="['DATERANGE'].includes(item.overviewType)">
            <el-date-picker
                :key="item.createTimestamp"
                v-model="item.value"
                :type="item.formatType"
                :value-format="item.format"
                :format="item.format"
                placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    name: "DynamicRenderForm",
    props: {
      form: Object,
      fields: Array,
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .form-col{
    ::v-deep .el-date-editor{
      width: 100%;
    }
    ::v-deep .el-select{
      width: 100%;
    }
  }
</style>
