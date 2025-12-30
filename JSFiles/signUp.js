import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit-signUp");
    if (!submit) {
        console.error("Submit button not found!");
        return;
    }
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById('user-signUp');
        const email = document.getElementById('email-signUp').value;
        const password = document.getElementById('password-signUp').value;
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
            // User successfully registered
            const user = userCredential.user;
            alert('User successfully registered');
            window.location.href = '../index.html';
            // console.log("User:", user);
        })
            .catch((error) => {
            // Handle errors
            alert("Error: " + error.message);
            console.error(error);
        });
    });
});
