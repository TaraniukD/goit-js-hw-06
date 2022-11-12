const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email.length === 0 || password.length === 0) {
        alert('всі поля повинні бути заповнені');
        return;
    }

     const formsValue = {
        email,
        password,
     };

     console.log(formsValue);

    formRef.reset();
});


