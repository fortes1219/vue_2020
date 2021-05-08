import Vue from 'vue';

// 自訂驗證規則: 身分證ID格式
export const idCard = (value, callback) => {
  const regex = /^[A-Za-z][12]\d{8}$/
  if (!regex.test(value)) {
    callback(new Error('ID格式不正確'));
  } else {
    return true
  }
}

// 網址是否有效
export const webUrl = (value, callback) => {
  const regex = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/
  if (!regex.test(value)) {
    callback(new Error('網址格式不正確')); 
  } else {
    return true
  }
}

// 取出網址中的domain name網域名
export const domainNameFinder = (value) => {
  const result = value.replace(/^((ht|f)tps?):\/\/|(?:w{3}\.)|(?:\.\w+\.\w+){1,}|(\.\w+)|(\/\w+)|(?:\/\w+|(?:\/+))$/g, "")
  return result
} 