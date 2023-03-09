<template>
  <div class="form-page">
    <dynamic-configuration-form
        @save="save"
    ></dynamic-configuration-form>
    <el-dialog
        title="预览"
        :visible.sync="visible"
        width="80%"
        center>
      <dynamic-render-form :fields="fieldsArray"></dynamic-render-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import DynamicConfigurationForm from "../../components/dynamic-configuration-form/index";
import DynamicRenderForm from "../../components/dynamic-render-form/index";
export default {
  name: "Department",
  components: {
    DynamicConfigurationForm,
    DynamicRenderForm
  },
  data() {
    return {
      formFields: {},
      fieldsArray: [],
      checkedField: {},
      visible: false
    };
  },
  methods: {
    save(formFields, fieldsArray, checkedField) {
      this.fieldsArray = fieldsArray;
      console.log(formFields,'-----formFields');
      console.log(fieldsArray,'-----fieldsArray');
      console.log(checkedField,'-----checkedField');
      this.visible = true;
    },
  }
};
</script>

<style lang="scss" scoped>
.form-page {
  height: 100%;
}
</style>
