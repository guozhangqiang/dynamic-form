'use strict';
import DynamicRenderForm from './src/main.vue'

DynamicRenderForm.install = function (Vue) {
  Vue.component(DynamicRenderForm.name, DynamicRenderForm)
};

export default DynamicRenderForm
