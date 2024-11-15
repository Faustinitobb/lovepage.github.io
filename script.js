// Variables del login
const validUsername = "Teamo";
const validPassword = "Mamita";

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const loginScreen = document.getElementById('login-screen');
const loveScreen = document.getElementById('love-screen');

// Manejo de la autenticación
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        loginScreen.style.display = 'none';
        loveScreen.style.display = 'flex';
    } else {
        errorMessage.style.display = 'block';
    }
});