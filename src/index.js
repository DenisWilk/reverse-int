module.exports = function reverse (n) {

    const num = Math.abs(n);
    const strNum = num.toString();
    const arrRevNum = Array.from(strNum).reverse();
    const strFromArr = arrRevNum.join('');
    const res = Number(strFromArr);
  
    return res;
  }
