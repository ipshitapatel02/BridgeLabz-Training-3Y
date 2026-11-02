const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; max-width: 400px; margin: 30px auto; }
  .indicator { margin-bottom: 14px; color: #555; }
  input { width: 100%; padding: 8px; box-sizing: border-box; border: 2px solid #ccc; }
  input.invalid { border-color: red; }
  .error { color: red; min-height: 18px; font-size: 13px; }
  .buttons { display: flex; gap: 8px; margin-top: 10px; }
  button { padding: 8px 16px; cursor: pointer; }
  .summary { border: 2px solid #16a34a; padding: 12px; border-radius: 8px; }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <h2>Multi-Step Form</h2>
  <div id="formArea"></div>`;

const steps = [
  {
    key: "name",
    label: "Name",
    type: "text",
    isValid: (value) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value.trim()),
    errorMessage: "Name must contain only alphabets.",
  },
  {
    key: "email",
    label: "Email",
    type: "text",
    isValid: (value) => /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(value.trim()),
    errorMessage: "Enter a valid email (example@domain.com).",
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    isValid: (value) => value.length >= 6,
    errorMessage: "Password must be at least 6 characters.",
  },
];

const formData = {};
let currentStep = 0;
const formArea = document.getElementById("formArea");

function renderStep() {
  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  formArea.innerHTML = `
    <div class="indicator">Step ${currentStep + 1} of ${steps.length}</div>
    <label>${step.label}</label><br>
    <input id="stepInput" type="${step.type}" value="${formData[step.key] || ""}">
    <div class="error" id="stepError"></div>
    <div class="buttons">
      <button id="backButton" ${currentStep === 0 ? "disabled" : ""}>Back</button>
      <button id="nextButton">${isLastStep ? "Finish" : "Next"}</button>
    </div>`;

  const input = document.getElementById("stepInput");
  input.focus();
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") goNext();
  });
  document.getElementById("backButton").addEventListener("click", goBack);
  document.getElementById("nextButton").addEventListener("click", goNext);
}

function goNext() {
  const step = steps[currentStep];
  const input = document.getElementById("stepInput");
  const error = document.getElementById("stepError");

  if (!step.isValid(input.value)) {
    input.classList.add("invalid");
    error.textContent = step.errorMessage;
    return;
  }

  formData[step.key] = input.value;

  if (currentStep === steps.length - 1) {
    showSummary();
  } else {
    currentStep++;
    renderStep();
  }
}

function goBack() {
  const step = steps[currentStep];
  const input = document.getElementById("stepInput");
  formData[step.key] = input.value;
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function showSummary() {
  formArea.innerHTML = `
    <div class="summary">
      <h3>Summary</h3>
      <p><b>Name:</b> ${formData.name}</p>
      <p><b>Email:</b> ${formData.email}</p>
      <p><b>Password:</b> ${"*".repeat(formData.password.length)}</p>
    </div>`;
}

renderStep();
