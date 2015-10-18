var array = [1,2,3,true,false,'bum','bam'];
function find(arr,value){
	return arr.indexOf ? arr.indexOf(value) : -1;
};
console.log(find(array,1));
