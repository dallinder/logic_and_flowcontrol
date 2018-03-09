function substring(string, start, end) {
	var newStr = '';
	if (end < 0 || end === NaN) {
		end = 0;
	} else if (end > string.length) {
		end = string.length;

	} else if (end === undefined) {
		end = string.length;
	}

	if (start < 0 || isNaN(start)) {
		start = 0;

	} else if (start > end) {

		var temp;
		temp = start;
		start = end;
		end = temp;
	} 

	

	for(var i = start; i < end; i += 1) {

		newStr += string[i];
	}

	console.log(newStr);
}