const CheckboxField = {
  /**通用字段**/
  label: '多项选择',    // 渲染表单时表单元素的label字段
  title: '多项选择',    // 该字段类型的标题
  value: [],    // 渲染表单时表单元素的绑定值
  defaultValue: [],    // 渲染表单时表单元素的绑定默认值
  column: '',    // 渲染表单时表单元素的英文字段
  placeholder: '请选择',    // 渲染表单时表单元素的placeholder
  width: 100,    // 渲染表单时表单元素所占每行的百分比
  required: false,    // 渲染表单时表单元素是否必须
  type: 'CHECKBOX',    // 该字段类型的类型
  overviewType: 'CHECKBOX',    // 该字段类型的大类型
  description: '选择组件，可以自定义编辑和增删选项，还可以设置填写者选择的数量规则（最多选几个、最少选几个）。',    // 该字段类型的描述
  helpTips: '',    // 渲染表单时表单元素指导用户输入数据的提示信息
  /**个性字段**/
  optionTempId: 3,
  options: [
    { optValue: '未命名1', tempId: -1 },
    { optValue: '未命名2', tempId: -2 },
    { optValue: '未命名3', tempId: -3 },
  ],
};

Object.freeze(CheckboxField);

export default CheckboxField;
