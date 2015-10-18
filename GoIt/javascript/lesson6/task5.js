var str = 'А роза упала на лапу Азора';
function isPalindrome(str) {

var reversedStr = str.split('');
var blank = ' ';
   
   for(i = 0; i < reversedStr.length; i++){
    if(reversedStr[i] == blank){
      reversedStr.splice(i,1);
    }
   }
 var copyStr = reversedStr.slice();
 reversedStr.reverse();

   if(reversedStr.join().toLowerCase() == copyStr.join().toLowerCase()){
      return true;
    }else{
       return false;
    }

}
console.log(isPalindrome(str));