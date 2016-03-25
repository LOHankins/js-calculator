var calculator = {

	add: function(num1, num2) {
		sum = (num1 + num2);
		return sum;
	},
	mult: function(num1, num2) {
		prod = (num1 * num2);
		return prod;
	},
	sub: function(num1, num2) {
		diff = (num1 - num2);
		return diff;
	},
	div: function(num1, num2) {
		quot = (num1 / num2);
		return quot;
	},
	pwr: function(num1, exp) {
		if (exp === 1) {
			return num1;
		}
		else {
			return num1 * (calculator.pwr(num1, (exp = exp -1) ));

		}
	},
};
//	var x = 5;
//	var y = 2;


//	var sm = 0;
//	sm = calculator.add(x, y);
//	console.log(sm);
//	sm = calculator.mult(x, y);
//	console.log(sm);
//	sm = calculator.sub(x, y);
//	console.log(sm);
//	sm = calculator.div(x, y);
//	console.log(sm);
//	sm = calculator.pwr(x, y);
//	console.log(sm);

console.log("Enter caculator.xxx(number1, number2) to try the program");
console.log("Functions are add, mult, sub, div, and pwr for exponents");