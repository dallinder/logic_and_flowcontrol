var counter = 1
var password = 'password'

var guess = prompt('What is the password');

while (counter < 3) {
	if (guess === password) {
		console.log('correct');
		break;
	}	else {
		counter += 1
		prompt('That is incorrect. Try again')
	}

	if (counter === 3) {
		console.log('you are denined access');
	}
}
