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

function checkGoldbach(num) {
	if (num % 2 === 1 || num < 4) {
		console.log(null);

	} else {
		for (var i = 1; i <= (num / 2); i += 1) {
			if (isPrime(i) && isPrime(num - i)) {
				console.log(String(i) + ' ' + String(num -i))
			}
		}
	}
}

checkGoldbach(3);