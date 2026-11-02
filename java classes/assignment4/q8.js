
const user = { name: "John", email: "john@mail.com", age: 21 };

document.body.innerHTML = `
  <h2>Edit User</h2>
  <form id="userForm" style="max-width:320px;font-family:sans-serif">
    <label>Name</label><br><input id="name" type="text"><br><br>
    <label>Email</label><br><input id="email" type="email"><br><br>
    <label>Age</label><br><input id="age" type="number"><br><br>
    <button type="submit">Update</button>
  </form>
  <h3>Current User Object</h3>
  <pre id="display"></pre>`;

function showUser() {
  document.getElementById("display").textContent = JSON.stringify(user, null, 2);
}

["name", "email", "age"].forEach((key) => (document.getElementById(key).value = user[key]));
showUser();

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  user.name = document.getElementById("name").value.trim();
  user.email = document.getElementById("email").value.trim();
  user.age = Number(document.getElementById("age").value);
  showUser();
  console.log("Updated user:", user);
});

["name", "email", "age"].forEach((key) =>
  document.getElementById(key).addEventListener("input", (e) => {
    user[key] = key === "age" ? Number(e.target.value) : e.target.value;
    showUser();
  })
);
