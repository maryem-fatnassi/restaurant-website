import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("submit-login");
    if (!loginBtn) {
        console.error("Login button not found!");
        return;
    }
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById('user-login');
        const email = document.getElementById("email-login").value;
        const password = document.getElementById("password-login").value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // User successfully logged in
            const user = userCredential.user;
            alert("Login Successful!");
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
