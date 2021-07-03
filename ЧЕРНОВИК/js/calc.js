//import { errorFormat } from './error.js';
//import { DateTime } from './luxon.js';

const calcDateForm = document.querySelector('#calcForm');
const calcDateResult = document.querySelector('#datecalc__result');

calcDateForm.addEventListener("submit", handleCalcDates);


//choc__Фнкциональное выражение вывода ошибки заполнения полей дат
const errorFormat = text => `
	<span class="error">${ text }</span>
`;
//choc--------------------------------------------------------------
function handleCalcDates(e) {
	e.preventDefault();
	calcDateResult.innerText = '';

	let { date1, date2 } = e.target.elements;
	date1 = date1.value;
	date2 = date2.value;
	
	if (date1 && date2) {
		//calcDateResult.innerHTML = diffDates(date1, date2);
		console.log(diffDates(date1, date2));

	} else {
		calcDateResult.innerHTML = errorFormat('Укажите дату для обоих полей ввода');
		//@calcDateResult.classList.add('error');
	}
}

//choc__Определение разницы дат_______________________________________

function diffDates(date1, date2) {
	date1 = this.DateTime.fromISO(date1);
	date2 = this.DateTime.fromISO(date2);

	return date2.diffDates(date1, ['years', 'months', 'days']).toObject();
}
