nameInReverse = function(name){
	var reversed = name.toLowerCase().split('').reverse().join(''),
        result = reversed.charAt(0).toUpperCase() + reversed.slice(1);
  
	console.log('Your name in reverse is ' + result);
};
nameInReverse('Valentina');