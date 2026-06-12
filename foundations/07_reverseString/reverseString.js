const reverseString = function(string) {

	let newStr = "";
	for(let i = string.length - 1; i >= 0; i--){
		newStr += string[i];	
	}
	return newStr
};

console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
