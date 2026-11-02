
const rules = {
  name: { regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/, msg: "Name must contain alphabets only." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/, msg: "Enter a valid email address." },
  seats: { regex: /^([1-9]|10)$/, msg: "Seats must be between 1 and 10." },
};

document.body.innerHTML = `
  <h2>Movie Ticket Booking</h2>
  <form id="bookingForm" novalidate style="max-width:320px;font-family:sans-serif">
    ${Object.keys(rules).map((f) => `
      <div style="margin-bottom:12px">
        <label>${f[0].toUpperCase() + f.slice(1)}</label><br>
        <input id="${f}" type="text" style="width:100%;padding:6px;border:2px solid #ccc">
        <small id="${f}Err" style="color:red"></small>
      </div>`).join("")}
    <button type="submit">Book Ticket</button>
  </form>
  <div id="ticket"></div>`;

function check(field) {
  const input = document.getElementById(field);
  const ok = rules[field].regex.test(input.value.trim());
  input.style.borderColor = ok ? "green" : "red";
  document.getElementById(field + "Err").textContent = ok ? "" : rules[field].msg;
  return ok;
}

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const ticketDiv = document.getElementById("ticket");

  if (!Object.keys(rules).map(check).every(Boolean)) {
    ticketDiv.innerHTML = "";
    return;
  }

  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value),
  };

  ticketDiv.innerHTML = `
    <div style="border:2px dashed #333;padding:12px;margin-top:16px;max-width:320px;font-family:sans-serif">
      <h3>🎟️ Ticket Confirmed</h3>
      <p><b>Name:</b> ${booking.name}</p>
      <p><b>Email:</b> ${booking.email}</p>
      <p><b>Seats:</b> ${booking.seats}</p>
    </div>`;
  console.log(booking);
});
