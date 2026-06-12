const repeatString = function(string, num) {
	let newStr = "";
	for (let i = 0; i < num; i++){
		newStr += string;
	}
	return newStr;
};

console.log(repeatString("hey",3));

// Do not edit below this line
module.exports = repeatString;
