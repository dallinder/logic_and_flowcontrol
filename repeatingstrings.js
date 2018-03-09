function repeat(string, times) {
	if (times <= 0) {
		return undefined;
	}

	var newStr = '';
	var counter = 0;

	while (counter < times) {
		newStr += string;
		counter += 1;
	}

	console.log(newStr);
}