function indexOf(firstString, secondString) {
	var m = firstString.length;
	var n = secondString.length;
	var matchcount;
	for(var i = 0; i <= m; i += 1) {
		 matchcount = 0

		 for(var j = 0; j < n; j += 1) {
		 	if (firstString[i + j] === secondString[j]) {
		 		matchcount += 1;
		 	} else {
		 		break;
		 	}
		 }

		 if (matchcount === secondString.length) {
		 	return i;
		 }

	}

	return -1;
}

function lastIndexOf(firstString, secondString) {
	var limit = firstString.length - secondString.length;
	var matchcount;
	var i;
	var j;

	for (i = limit; i >= 0; i -= 1) {
		matchcount = 0;

		for (var j = 0; j < secondString.length; j += 1) {
			if (firstString[i + j] === secondString[j]) {
				matchcount += 1;
			} else {
				break;
			}
		}

		if (matchcount === secondString.length) {
			return i;
		}
	}

	return -1;
}