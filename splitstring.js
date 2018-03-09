function splitString(string, delimiter) {
	


	var newStr = '';

	for(var i = 0; i <= string.length; i += 1) {
		if (delimiter === undefined) {
					console.log('ERROR: No delimiter');
					break;

		} else if (delimiter === '') {
			console.log(string[i]);
			
		} else if (i === string.length) {
			console.log(newStr);

		} else if (string[i] !== delimiter) {
			newStr += string[i];

		} else {

			console.log(newStr);
			newStr = '';
		}
	}
}