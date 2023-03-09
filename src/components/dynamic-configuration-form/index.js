'use strict';
import DynamicConfigurationForm from './src/main.vue'

DynamicConfigurationForm.install = function (Vue) {
  Vue.component(DynamicConfigurationForm.name, DynamicConfigurationForm)
};

export default DynamicConfigurationForm
