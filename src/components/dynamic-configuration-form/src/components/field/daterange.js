const DaterangeField = {
  /**通用字段**/
  label: '起止时间',  // 渲染表单时表单元素的label字段
  title: '起止时间',  // 该字段类型的标题
  value: [],  // 渲染表单时表单元素的绑定值
  defaultValue: [],  // 渲染表单时表单元素的绑定默认值
  column: '',  // 渲染表单时表单元素的英文字段
  placeholder: '请选择日期',  // 渲染表单时表单元素的placeholder
  width: 100,  // 渲染表单时表单元素所占每行的百分比
  required: false,  // 渲染表单时表单元素是否必须
  type: 'DATERANGE',  // 该字段类型的类型
  overviewType: 'DATERANGE',  // 该字段类型的大类型
  description: '时间选择组件，需要填写者选择起止日期与时刻。',  // 该字段类型的描述
  helpTips: '',  // 渲染表单时表单元素指导用户输入数据的提示信息
  /**个性字段**/
  format: 'yyyy-MM-dd',
  formatType: 'daterange',
  formatOption: [
    { value: 'yyyy-MM-dd', label: '年-月-日', type: 'daterange' },
    { value: 'yyyy-MM-dd HH:mm', label: '年-月-日 时:分', type: 'datetimerange' },
    { value: 'yyyy-MM-dd HH:mm:ss', label: '年-月-日 时:分:秒', type: 'datetimerange' },
  ]
};

Object.freeze(DaterangeField);

export default DaterangeField;
