function logMultiples(num) {
	for (var i = 100; i > 0; i -= 1) {
		if (num * i <= 100 && (num * i) % 2 === 1) {
			console.log(num * i);
		} 
	} 
}

logMultiples(21);