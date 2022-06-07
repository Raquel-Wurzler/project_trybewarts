//Requisito 3
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

//Requisito 18
// const btn = document.getElementById('submit-btn');
// const agreement = document.getElementById('agreement').value;

const agreement = document.querySelector('agreement');
const btn = document.querySelector('submit-btn')
function radioChecked(){
if (agreement.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
agreement.addEventListener('click',  radioChecked);

// btn.addEventListener('click', function (event) {
//   event.preventDefault();
//   const agreement = document.getElementById('agreement').value;
//   console.log(agreement)
//   if (agreement == off) {
//     alert('Você concorda com o uso das informações acima?')
//   } else {
//     !event.preventDefault();
//   }
// })
