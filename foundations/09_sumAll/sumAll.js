const sumAll = function(num1, num2) {
	let larger;
	let smaller;
	let total = 0;
	if(num1 >= num2){
		larger = num1;
		smaller = num2;
	}else{
		larger = num2;
		smaller = num1;
	}

	for(let i = smaller; i <= larger; i++){
		total += i;	
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
