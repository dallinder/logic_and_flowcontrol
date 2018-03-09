var ASCII_CONVERSION_NUM = 13

function addConversionNum(letter) {
	return String.fromCharCode(letter.charCodeAt(0) + ASCII_CONVERSION_NUM);
}

function subConversionNum(letter) {
	return String.fromCharCode(letter.charCodeAt(0) - ASCII_CONVERSION_NUM);
}

function convertLetter(letter) {
	if (letter >= 'A' && letter <= 'M' || letter >= 'a' && letter <= 'm') {
		return addConversionNum(letter);
	} else if (letter >= 'N' && letter <= 'Z' || letter >= 'n' && letter <= 'z') {
		return subConversionNum(letter);
	} else {
		return letter;
	}
}

function rot13(string) {
	var newStr = '';
	
	for(var i = 0; i < string.length; i += 1) {
		newStr += convertLetter(string[i]);
	}
	
	return newStr;
}
