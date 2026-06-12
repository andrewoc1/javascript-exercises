const removeFromArray = function(arr) {
	let newArr = arr; 
	for(let i = 1; i < arguments.length; i++){
		newArr = newArr.filter(val => val != arguments[i]);
	}
	return newArr;
};
console.log(removeFromArray([1,5,3,6,7,8], 5, 3));

// Do not edit below this line
module.exports = removeFromArray;
