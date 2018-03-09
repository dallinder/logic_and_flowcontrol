function leftTrim(str) {
	var i;
	var j;
	var newStr = '';

	for(i = 0; i <= str.length / 2; i += 1) {
		if (str[i] === ' ') {
			continue;

		} else {

			for(j = 0; i + j <= str.length - 1; j += 1) {
				newStr += str[i + j];
			}
		}

		break;
	}

	return newStr;
}

function rightTrim(str) {
	var i;
	var j;
	var newStr = '';
	var limit = str.length - 1

	for(i = limit; i >= 0; i -= 1) {
		if (str[i] === ' ') {
			continue;

		} else {

			for(j = 0; i - j >= 0; j += 1) {
				newStr = str[i - j] + newStr;
			}
		}

		break;
	}

	return newStr;
}

function trim(str) {
	var newStr;

	newStr = leftTrim(str);
	newStr = rightTrim(newStr);

	return newStr;


}