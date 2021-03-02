'use strict';

const inputUsd = document.querySelector('#usd'),
	  inputEur = document.querySelector('#eur');
	  
	 

	  inputEur.addEventListener('input', () => {
	const request = new XMLHttpRequest();
	 

	request.open('GET', 'current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('load', () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputEur.value * data.current.usd  ).toFixed(2);
		} else {
			inputUsd.value = "Что-то пошло не так";
	    }
    });
});
