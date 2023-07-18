// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function validateForm() {
    // Get the values entered in the email and password fields
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var passwordReinput = document.getElementById("passwordReinput").value;
    var username = document.getElementById("userInput").value;

    // Validate password match
    if (username.length < 1) {
        alert("Tolong masukkan username");
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Validate password match
    if (password !== passwordReinput) {
        alert("Passwords do not match");
        return false;
    }

    // Form is valid, proceed with submission
    return true;
}
