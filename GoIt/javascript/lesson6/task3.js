var arr = [1, 2, 3, 4, 5];

function randomSort(arr){
  return Math.random() - 0.5;
}

arr.sort(randomSort);

console.log(arr);