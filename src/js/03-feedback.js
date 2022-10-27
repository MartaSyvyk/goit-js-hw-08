const throttle = require('lodash.throttle');

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input'),
  messageEl: document.querySelector('textarea'),
};

let userData = { email: '', message: '' };

function onLoad(event) {
  if (localStorage.getItem('feedback-form-state')) {
   const storageDataObject = JSON.parse(localStorage.getItem('feedback-form-state'));

    refs.emailEl.value = storageDataObject.email;
    refs.messageEl.value = storageDataObject.message;

    console.log('loaded');
  }
}

function onInput(event) {
  userData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log('submited');
}

window.addEventListener('load', onLoad);
refs.formEl.addEventListener('input', throttle(onInput, 1000));
refs.formEl.addEventListener('submit', onSubmit);
