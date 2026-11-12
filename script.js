// ================================
// LOGIN FUNCTION
// ================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simple validation
        if (email === "" || password === "") {
            alert("Please enter your email and password.");
        } else {
            alert("Login Successful!");

            // Open Home Page
            window.location.href = "home.html";
        }
    });
}


// ================================
// FEEDBACK FUNCTION
// ================================

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for your feedback!");

        feedbackForm.reset();
    });
}