// Show and hide authentication form
const login_button = document.getElementById('login_button');
const signUp_button = document.getElementById('signUp-button');
const user_login = document.getElementById('user-login');
const user_signUp = document.getElementById('user-signUp');
function displaySignUpForm() {
    user_signUp.classList.add('show');
    user_login.classList.add('hide');
}
function displayLoginForm() {
    user_signUp.classList.remove('show');
    user_login.classList.remove('hide');
}
signUp_button.addEventListener('click', displaySignUpForm);
login_button.addEventListener('click', displayLoginForm);