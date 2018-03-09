function logOddNumbers(num) {
	for (var i = 1; i <= num; i += 1) {
		if (i % 2 === 1) {
			console.log(i);
		};
	};
};

logOddNumbers(19);