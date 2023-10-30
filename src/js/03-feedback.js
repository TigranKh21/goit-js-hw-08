import throttle from 'lodash.throttle';

const formDataEl = document.querySelector('.feedback-form')

formDataEl.addEventListener('input', throttle(onInput, 500));
formDataEl.addEventListener('submit', onSubmit);

let savedData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

if(savedData !== null){
    formDataEl.email.value = savedData.email ?? '';
    formDataEl.message.value = savedData.message ?? ''
}else{
    localStorage.removeItem('feedback-form-state')
}

function onInput(event) {
    let {email, message} = formDataEl.elements;
    let data = {
        email: email.value,
        message: message.value
        }
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
    }

function onSubmit(event){
    event.preventDefault();
    console.log(localStorage.getItem('feedback-form-state'))
    localStorage.removeItem('feedback-form-state')
    event.currentTarget.reset()
}


