// Uppgift 1
function showMeal() {
	const meal = document.querySelector('#meal-input').value;
	let message = '';

	if (meal === '') {
		alert('Inget värde matat!')
	} else {

		if (meal == 'bacon och ägg') {
			message = 'morgonmål';
		} else if (meal == 'pasta') {
			message = 'lunch';
		} else if (meal == 'biff') {
			message = 'middag';
		} else if (meal == 'bröd') {
			message = 'kvällsmål';
		} else {
			message = 'något annat';
		}
	}

	document.querySelector('#meal').innerHTML = message
}

// Uppgift 2
function setOperator(operator) {
	document.querySelector('#operator').textContent = operator;
}

function calculate() {
	const a = Number(document.querySelector('#a').value);
	const b = Number(document.querySelector('#b').value);
	const operator = document.querySelector('#operator').textContent;

	switch (operator) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '/':
			return a / b;
		case '*':
			return a * b;
		case '%':
			return a % b;
	}
}

function showResult(result) {
	document.querySelector('#resultat').textContent = result;
}

// Uppgift 3
function getDaysBetween() {
	const oneDay = 24 * 60 * 60 * 1000;
	const firstDate = new Date(document.querySelector('#firstDate').value);
	const secondDate = new Date(document.querySelector('#secondDate').value);
	const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
	document.querySelector('#daysBetweenOutput').innerHTML = String(diffDays);
}

// Uppgift 4
function getDaysToToday() {
	const oneDay = 24 * 60 * 60 * 1000;
	const firstDate = new Date();
	const secondDate = new Date(document.querySelector('#calculationDate').value);
	const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
	document.querySelector('#daysToTodayOutput').innerHTML = String(diffDays);
}

// Uppgift 5
function showPrompt() {
	const age = prompt('Hur gammal är du?');
	if (age.match(/^[0-9]+$/)) {
		if (age < 18) {
			console.log('Du är minderårig')
		} else {
			console.log('Du är myndig')
		}
	} else {
		console.log('Ogiltigt!')
	}
}
showPrompt();