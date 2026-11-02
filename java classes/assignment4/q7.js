
document.body.innerHTML = `
  <h2>Login</h2>
  <form id="loginForm" novalidate style="max-width:340px;font-family:sans-serif">
    <label>Username</label><br>
    <input id="username" type="text" style="width:100%;padding:6px"><br><br>
    <label>Password</label><br>
    <input id="password" type="password" style="width:100%;padding:6px"><br><br>
    <button type="submit">Login</button>
  </form>
  <ul id="errors" style="color:red"></ul>
  <p id="success" style="color:green"></p>`;

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errors = [];

  if (!/^.{5,}$/.test(username)) errors.push("Username must be at least 5 characters.");

  if (!/^.{8,}$/.test(password)) errors.push("Password must be at least 8 characters.");
  if (!/\d/.test(password)) errors.push("Password must include a number.");
  if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
  if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");

  document.getElementById("errors").innerHTML = errors.map((m) => `<li>${m}</li>`).join("");
  document.getElementById("success").textContent = errors.length ? "" : "Login successful!";
});
