// JavaScript Document
var number = Math.ceil(Math.random() * 100);
var guesses = 0;
var score = [0,0,0,0,0];

function verify() {
    var guess = Number(this.elements.guess.value),
        output1 = document.getElementById('output1');
		output2 = document.getElementById('output2');
		output3 = document.getElementById('output3');
		guesses += 1;

    if (isNaN(guess)) {
        output1.innerHTML = 'Enter a number.';
    } else if (number === guess) {
        output1.innerHTML = 'You guessed right!';
		output2.innerHTML = 'It took you ' + guesses + ' guesses.';
		score.pop();
		score.unshift(guesses);
		output3.innerHTML = 'Your 5 last results: '+score
    } else if ((guess > 100) || (guess < 1)) {
        output1.innerHTML = 'Your guess is out of the 1 to 100 range.';
    } else if (guess > number) {
        output1.innerHTML = 'Your guess is too high.';
    } else if (guess < number) {
        output1.innerHTML = 'Your guess is too low.';
    }
    return false;
};

function restart() {
	number = Math.ceil(Math.random() * 100);
	guesses = 0;
	output01 = document.getElementById('output1');
	output02 = document.getElementById('output2');
	output03 = document.getElementById('output3');
	output01.innerHTML = "Enter your guess what number I'm thinking about!";
	output02.innerHTML = 'Your current result:';
	//output03.innerHTML = ' ';
	return false;
}