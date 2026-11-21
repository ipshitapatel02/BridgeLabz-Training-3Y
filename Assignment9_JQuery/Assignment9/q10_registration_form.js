$(document).ready(function () {
  // Simulated "database" of emails that are already taken
  const registeredEmails = [
    "admin@example.com",
    "test@example.com",
    "user@example.com",
    "demo@example.com",
    "hello@example.com"
  ];

  // Mark one field valid or invalid.
  // Scenario 5: .css() sets a red border for invalid fields and a green one for valid fields.
  function setFieldState($field, errorText) {
    const isValid = errorText === "";

    $field.css("border", isValid ? "2px solid green" : "2px solid red");
    $field.next(".error").text(errorText); // the <p class="error"> right after the input
    return isValid;
  }

  // Scenario 1: name must not be empty
  function validateName() {
    const name = $("#nameField").val().trim();
    return setFieldState($("#nameField"), name === "" ? "Name is required." : "");
  }

  // Scenario 2: email must have a valid format AND must not be registered already
  function validateEmail() {
    const email = $("#emailField").val().trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let message = "";

    if (email === "") {
      message = "Email is required.";
    } else if (!emailPattern.test(email)) {
      message = "Enter a valid email address.";
    } else if (registeredEmails.includes(email)) {
      message = "This email is already registered.";
    }
    return setFieldState($("#emailField"), message);
  }

  // Scenario 3: password needs at least 8 characters
  function validatePassword() {
    const password = $("#passwordField").val();
    return setFieldState(
      $("#passwordField"),
      password.length < 8 ? "Password must be at least 8 characters." : ""
    );
  }

  // Live feedback: re-check a field while the user types, once it has been checked before
  $("#nameField").on("input", function () { if ($(this).css("border-top-color") !== "rgb(170, 170, 170)") validateName(); });
  $("#emailField").on("input", function () { if ($(this).css("border-top-color") !== "rgb(170, 170, 170)") validateEmail(); });
  $("#passwordField").on("input", function () { if ($(this).css("border-top-color") !== "rgb(170, 170, 170)") validatePassword(); });

  // Scenario 4: on submit, validate everything and show the success message
  $("#registerForm").on("submit", function (event) {
    event.preventDefault(); // stop the page from reloading
    $("#successMessage").text("");

    // Run all three validators (no early exit, so every error is displayed together)
    const nameOk = validateName();
    const emailOk = validateEmail();
    const passwordOk = validatePassword();

    if (nameOk && emailOk && passwordOk) {
      // Save the new email so registering the same one again is rejected
      const newEmail = $("#emailField").val().trim().toLowerCase();
      registeredEmails.push(newEmail);
      $("#registeredList").append($("<li></li>").text(newEmail));

      $("#successMessage").text("Registration successful! Welcome, " + $("#nameField").val().trim() + ".");

      // Clear the form and put the borders back to their normal grey
      this.reset();
      $("#registerForm input").css("border", "2px solid #aaaaaa");
    }
  });
});
