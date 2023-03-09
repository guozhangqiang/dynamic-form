/**生成随机uuid**/
export function createUUID() {
  function S4() {
    return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4());
}

/**
 * @description 深克隆函数
 * @params {obj} 需要进行深克隆的数据
 */
export function deepClone(obj){
  let result = obj;
  if(typeof obj === 'object' && obj !== null) {
    result = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
    for(let prop in obj) {
      result[prop] = deepClone(obj[prop]);
    }
  }
  return result;
}
