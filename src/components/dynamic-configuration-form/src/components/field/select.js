const SelectField = {
  /**通用字段**/
  label: '下拉选择',  // 渲染表单时表单元素的label字段
  title: '下拉选择',  // 该字段类型的标题
  value: '',  // 渲染表单时表单元素的绑定值
  defaultValue: '',  // 渲染表单时表单元素的绑定默认值
  column: '',  // 渲染表单时表单元素的英文字段
  placeholder: '请选择',  // 渲染表单时表单元素的placeholder
  width: 100,  // 渲染表单时表单元素所占每行的百分比
  required: false,  // 渲染表单时表单元素是否必须
  type: 'SELECT',  // 该字段类型的类型
  overviewType: 'SELECT',  // 该字段类型的大类型
  description: '选择组件，可以自定义编辑和增删选项，填写者通过下拉框进行单项选择。',  // 该字段类型的描述
  helpTips: '',  // 渲染表单时表单元素指导用户输入数据的提示信息
  /**个性字段**/
  multiple: false,  // 渲染表单时表单元素是否支持多选
  optionTempId: 3,
  options: [
    { optValue: '未命名1', tempId: -1 },
    { optValue: '未命名2', tempId: -2 },
    { optValue: '未命名3', tempId: -3 },
  ],
};

Object.freeze(SelectField);

export default SelectField;
