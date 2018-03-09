function toLowerCase(string) {
	var offset = 32;
	var newStr = '';

	for (var i = 0; i < string.length; i += 1) {

		if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {
			newStr += String.fromCharCode(string[i].charCodeAt(0) + offset);
		} else {
			newStr += string[i];
		}
	}

	console.log(newStr);
}