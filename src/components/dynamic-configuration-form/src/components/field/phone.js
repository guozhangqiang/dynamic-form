const PhoneField = {
  /**通用字段**/
  label: '电话',  // 渲染表单时表单元素的label字段
  title: '电话',  // 该字段类型的标题
  value: '',  // 渲染表单时表单元素的绑定值
  defaultValue: '',  // 渲染表单时表单元素的绑定默认值
  column: '',  // 渲染表单时表单元素的英文字段
  placeholder: '请输入内容',  // 渲染表单时表单元素的placeholder
  width: 100,  // 渲染表单时表单元素所占每行的百分比
  required: false,  // 渲染表单时表单元素是否必须
  type: 'INPUT_PHONE',  // 该字段类型的类型
  overviewType: 'INPUT',  // 该字段类型的大类型
  description: '单行文本输入框，规定填写者输入内容为电话号码，带有字段校验。',  // 该字段类型的描述
  helpTips: '',  // 渲染表单时表单元素指导用户输入数据的提示信息
};

Object.freeze(PhoneField);

export default PhoneField;
