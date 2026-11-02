
const patterns = {
  name: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
  email: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
};

const messages = {
  name: "Name must contain only alphabets.",
  email: "Enter a valid email (example@domain.com).",
  phone: "Phone must be exactly 10 digits.",
  password: "Password needs 1 uppercase, 1 number and 1 special character.",
};

document.body.innerHTML = `
  <h2>Student Registration</h2>
  <form id="studentForm" novalidate style="max-width:350px;font-family:sans-serif">
    ${["name", "email", "phone", "password"].map((f) => `
      <div style="margin-bottom:14px">
        <label>${f[0].toUpperCase() + f.slice(1)}</label><br>
        <input id="${f}" type="${f === "password" ? "password" : "text"}"
               style="width:100%;padding:6px;border:2px solid #ccc">
        <small id="${f}Error" style="color:red"></small>
      </div>`).join("")}
    <button type="submit">Register</button>
    <p id="result"></p>
  </form>`;

function validateField(field) {
  const input = document.getElementById(field);
  const error = document.getElementById(field + "Error");
  const isValid = patterns[field].test(input.value.trim());

  input.style.borderColor = isValid ? "green" : "red";
  error.textContent = isValid ? "" : messages[field];
  return isValid;
}

Object.keys(patterns).forEach((f) =>
  document.getElementById(f).addEventListener("input", () => validateField(f))
);

document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const allValid = Object.keys(patterns).map(validateField).every(Boolean);
  const result = document.getElementById("result");
  result.style.color = allValid ? "green" : "red";
  result.textContent = allValid ? "Registration successful!" : "Please fix the errors above.";
});
