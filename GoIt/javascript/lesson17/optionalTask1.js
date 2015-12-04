var field = document.getElementById('field');

var coordinates = field.getBoundingClientRect();

var outerTop = coordinates.left + ':' + coordinates.top;

var outerBottom =  coordinates.right + ':' + coordinates.bottom;

var innerTop = (coordinates.left + field.clientLeft) + ':' + (coordinates.top + field.clientTop);


var innerBottom = (coordinates.right - (field.offsetWidth - field.clientLeft - field.clientWidth)) + ':' + (coordinates.bottom - (field.offsetHeight - field.clientTop - field.clientHeight));


console.log(outerTop);
console.log(outerBottom);
console.log(innerTop);
console.log(innerBottom);