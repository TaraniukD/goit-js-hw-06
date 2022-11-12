const counter = {
    value: 0,
    increment() {
        this.value += 1
    },
    decrement() {
        this.value -= 1
    },

};

const valueEl = document.querySelector('#value')

const counterValue = document.querySelectorAll('#counter button');

counterValue.forEach(btnValue => btnValue.addEventListener('click', function() {
    console.log(btnValue)
	if (this.dataset.action === 'decrement') {
		counter.decrement();
        valueEl.textContent = counter.value;
		
	} else {
		 counter.increment();
        valueEl.textContent = counter.value;
	}
}));
console.log(counterValue);