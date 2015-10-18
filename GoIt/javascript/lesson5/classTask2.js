var arr =[5, 4, 3, 8, 0];


function filterRange(arr,a,b){
  
	var filterResult = [];
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i]>=a && arr[i]<=b){
      filterResult.push(arr[i]);
    }
  }
  return filterResult;
}

var filtered = filterRange(arr,1,4);

console.log(filtered);

console.log(arr);