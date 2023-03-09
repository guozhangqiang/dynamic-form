// import Cascader from './cascader'
import Checkbox from './checkbox'
import Date from './date'
import Daterange from './daterange'
import Email from './email'
import Input from './input'
import Number from './number'
import Phone from './phone'
import Radio from './radio'
import Select from './select'
import Textarea from './textarea'

const FieldOptions = [
  Input,
  Textarea,
  Number,
  Date,
  Daterange,
  Phone,
  Email,
  Select,
  // Cascader,
  Radio,
  Checkbox
];

Object.freeze(FieldOptions);

export default FieldOptions;
