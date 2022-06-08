// Requisito 3
const button = document.getElementById('button-login');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('senha-login');

function login() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login);

// Requisito 18

// const agreement = document.querySelector('#agreement');
// const btn = document.querySelector('#submit-btn');
// btn.disabled = true;
// function radioChecked() {
//   if (agreement.checked) {
//     btn.disabled = true;
//   } else {
//     btn.disabled = false;
//   }
// }
// agreement.addEventListener('click', radioChecked());

const agreement = document.getElementById('agreement');
const btn = document.getElementById('submit-btn');
btn.disabled = true;
agreement.addEventListener('change', function () {
  if (agreement.value === '') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});