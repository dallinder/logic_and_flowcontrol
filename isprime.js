function isPrime(num) {
	var counter = 0

	if (num < 2) {
		return false;
	}

	for(var i = 2; i < num; i += 1) {

		if (num % i === 0) {
			counter += 1
		}
	}

	if (counter === 0) {
		return true;
	} else {
		return false;
	}
}

isPrime(1);