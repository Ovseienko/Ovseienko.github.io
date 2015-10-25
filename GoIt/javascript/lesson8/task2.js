function Calculator(){

  var methods = {
  "+": function(a,b){
    return a + b;
  },
  "-": function(a,b){
    return a - b;
  }
};

  this.calculate = function (string){
    var newStr = string.split(' ');
   
    var a = +newStr[0];
   
    var b = +newStr [2];
   
    var operator = newStr[1];
  
    if(a == isNaN || b == isNaN){
    alert('Give me a number, mate!');
  };
    
  return methods[operator](+a,+b);
  };

  this.addMethod = function(name,func){
    methods[name] = func;
  };
}

var powerCalc = new Calculator;

powerCalc.addMethod('*', function(a, b) {
  return +a * +b;
});

powerCalc.addMethod('/', function(a, b) {
  return +a / +b;
});

powerCalc.addMethod('**', function(a, b) {
  return Math.pow(+a, +b);
});

var result = powerCalc.calculate('3 ** 3');

console.log( result ); 