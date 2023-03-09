const DateField = {
  /**通用字段**/
  label: '日期',  // 渲染表单时表单元素的label字段
  title: '日期',  // 该字段类型的标题
  value: '',  // 渲染表单时表单元素的绑定值
  defaultValue: '',  // 渲染表单时表单元素的绑定默认值
  column: '',  // 渲染表单时表单元素的英文字段
  placeholder: '请选择日期',  // 渲染表单时表单元素的placeholder
  width: 100,  // 渲染表单时表单元素所占每行的百分比
  required: false,  // 渲染表单时表单元素是否必须
  type: 'DATE',  // 该字段类型的类型
  overviewType: 'DATE',  // 该字段类型的大类型
  description: '时间选择组件，需要填写者选择具体日期时间。',  // 该字段类型的描述
  helpTips: '',  // 渲染表单时表单元素指导用户输入数据的提示信息
  /**个性字段**/
  format: 'yyyy-MM-dd',
  formatType: 'date',
  formatOption: [
    { value: 'yyyy-MM-dd', label: '年-月-日', type: 'date' },
    { value: 'yyyy-MM-dd HH:mm', label: '年-月-日 时:分', type: 'datetime' },
    { value: 'yyyy-MM-dd HH:mm:ss', label: '年-月-日 时:分:秒', type: 'datetime' },
  ]
};

Object.freeze(DateField);

export default DateField;
