function startsWith(string, searchString) {
	for (var i = 0; i < searchString.length; i += 1) {
		if (string[i] !== searchString[i]) {
			return false;

		}
	}
	return true;
}