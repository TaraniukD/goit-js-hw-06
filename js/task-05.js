const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};
console.log(refs.input);
console.log(refs.nameLabel);

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    if ( !event.currentTarget.value) {
        refs.nameLabel.textContent = 'Anonymous';
    }  else { 
    refs.nameLabel.textContent = event.currentTarget.value;
}  
}

