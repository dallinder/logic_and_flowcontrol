function substr(string, start, length) {
	var newStr = '';
	var index;

	if (start < 0) {
		index = string.length + start;
	} else {
		index = start;
	}

	counter = 0;

	while (counter < length && index < string.length) {
		newStr += string[index];
		counter += 1;
		index += 1;
	}
	// for (index; index <= length; index += 1) {
	// 	newStr += string[index];
	// }

	console.log(newStr);
}