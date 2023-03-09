const InputField = {
  /**通用字段**/
  label: '单行文字',    // 渲染表单时表单元素的label字段
  title: '单行文字',    // 该字段类型的标题
  value: '',    // 渲染表单时表单元素的绑定值
  defaultValue: '',    // 渲染表单时表单元素的绑定默认值
  column: '',    // 渲染表单时表单元素的英文字段
  placeholder: '请输入内容',    // 渲染表单时表单元素的placeholder
  width: 100,    // 渲染表单时表单元素所占每行的百分比
  required: false,    // 渲染表单时表单元素是否必须
  type: 'INPUT_TEXT',    // 该字段类型的类型
  overviewType: 'INPUT',    // 该字段类型的大类型
  description: '单行文本输入框，需要填写者在输入框内根据标题填写相应的内容。',    // 该字段类型的描述
  helpTips: '',    // 渲染表单时表单元素指导用户输入数据的提示信息
/**个性字段**/
  minlength: 1,    //
  maxlength: 10000,    //
};

// Object.freeze(InputField);

export default InputField;
