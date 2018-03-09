function gcd(num1, num2) {

	for(num2; num2 >= 0; num2 -=1) {
		if (num1 % num2 === 0) {
			break;
		}
	}

	return num2;
};

gcd(12, 4)
