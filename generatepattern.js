function generatePattern(num) {
	var str;
	var j;

	for(var i = 1; i <= num; i += 1) {
		str = '';

		for(j = 1; j <= i; j += 1) {
			str += j;
		}

		str += '*'.repeat(num - i);

		console.log(str);
	}
}