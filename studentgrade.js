var score1 = prompt('Enter score 1');
var score2 = prompt('Enter score 2');
var score3 = prompt('Enter score 3');

var average = (Number(score1) + Number(score2) + Number(score3)) / 3
var starter = 'Based on the average of your 3 scores your grade is '
if (average >= 90) {
	console.log(starter + 'A');
} else if (average >= 80) {
	console.log(starter + 'B')
} else if (average >= 70) {
	console.log(starter + 'C');
} else if (average >= 60) {
	console.log(starter + 'D');
} else {
	console.log(starter + 'F');
}

