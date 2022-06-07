const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button');

// eslint-disable-next-line space-before-blocks
function login(){
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, tryber!');
  } else {
    window.alert('Email ou senha inválidos');
  }
}
button.addEventListener('click', login);
