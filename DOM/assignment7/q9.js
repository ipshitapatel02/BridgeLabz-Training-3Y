const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; max-width: 360px; margin: 30px auto; }
  .field { margin-bottom: 14px; }
  input { width: 100%; padding: 8px; box-sizing: border-box; border: 2px solid #ccc; }
  input.invalid { border-color: red; }
  .error { color: red; font-size: 13px; min-height: 16px; }
  #success { color: #15803d; font-weight: bold; margin-top: 12px; }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <h2>Registration Form</h2>
  <form id="signupForm" novalidate>
    <div class="field">
      <label>Name</label><br>
      <input id="name" type="text">
      <div class="error" id="nameError"></div>
    </div>
    <div class="field">
      <label>Email</label><br>
      <input id="email" type="text">
      <div class="error" id="emailError"></div>
    </div>
    <div class="field">
      <label>Password</label><br>
      <input id="password" type="password">
      <div class="error" id="passwordError"></div>
    </div>
    <button type="submit">Submit</button>
  </form>
  <div id="success"></div>`;

const validators = {
  name: (value) => (value.trim() === "" ? "Name is required." : ""),
  email: (value) => {
    if (value.trim() === "") return "Email is required.";
    if (!value.includes("@")) return "Email must contain @.";
    return "";
  },
  password: (value) => (value.length < 6 ? "Password must be at least 6 characters." : ""),
};

const form = document.getElementById("signupForm");
const successMessage = document.getElementById("success");

function showFieldError(fieldName) {
  const input = document.getElementById(fieldName);
  const errorText = validators[fieldName](input.value);
  document.getElementById(`${fieldName}Error`).textContent = errorText;
  input.classList.toggle("invalid", errorText !== "");
  return errorText === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const results = Object.keys(validators).map(showFieldError);
  const allValid = results.every(Boolean);
  successMessage.textContent = allValid ? "Form Submitted Successfully" : "";
});

Object.keys(validators).forEach((fieldName) => {
  document.getElementById(fieldName).addEventListener("input", () => {
    const input = document.getElementById(fieldName);
    const errorText = validators[fieldName](input.value);
    if (errorText === "") {
      document.getElementById(`${fieldName}Error`).textContent = "";
      input.classList.remove("invalid");
    }
    successMessage.textContent = "";
  });
});
