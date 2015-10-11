function checkSpam(text){
  var str = text.toLowerCase();
  return str.indexOf('sex') !== -1 || str.indexOf('spam') !== -1 ? true:false;
}
console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));