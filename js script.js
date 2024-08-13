document.addEventListener('DOMContentLoaded', function() {
    // Handle registration form submission
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            alert('Registration successful!');
            this.reset();
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            if (email === '' || password === '') {
                alert('Please enter your email and password.');
                return;
            }

            alert('Login successful!');
            this.reset();
        });
    }

    // Navigation highlighting
    function highlightCurrentPage() {
        const currentLocation = window.location.href;
        const navLinks = document.querySelectorAll('.navbar ul li a');

        navLinks.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    highlightCurrentPage();
});
