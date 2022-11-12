const refs = {
    input: document.querySelector('#validation-input'),
};
console.log(refs.input);

   refs.input.addEventListener('blur', onInputBlur);

  function onInputBlur(event) {
    
    const inputLength = event.currentTarget.value.length;
    const inputDataValue = Number(refs.input.dataset.length);

    if ( inputLength === inputDataValue ) {
   
      refs.input.classList.remove('invalid');
      refs.input.classList.add('valid');

    } else {
      refs.input.classList.remove('valid');
      refs.input.classList.add('invalid');
  }
    
    }
