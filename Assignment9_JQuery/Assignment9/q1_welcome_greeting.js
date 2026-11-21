// Run only after the whole HTML document is ready
$(document).ready(function () {
  // Five motivational quotes, used one after another by the "Change Greeting" button
  const quotes = [
    "The secret of getting ahead is getting started.",
    "Dream big, work hard, stay focused.",
    "Small steps every day lead to big results.",
    "Believe you can and you are halfway there.",
    "Success is the sum of small efforts repeated daily."
  ];
  let quoteIndex = 0;

  // Scenario 1: pick a greeting from the current hour
  function getTimeGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning! Welcome!";
    if (hour < 17) return "Good Afternoon! Welcome!";
    return "Good Evening! Welcome!";
  }

  // .text() replaces the content of the heading with the greeting
  $("#greeting").text(getTimeGreeting());

  // Scenario 2: swap the greeting for the next quote each time the button is clicked
  $("#changeBtn").on("click", function () {
    $("#greeting").text(quotes[quoteIndex]);
    quoteIndex = (quoteIndex + 1) % quotes.length; // wrap back to the first quote
  });

  // Scenario 3: .toggle() shows the message if hidden and hides it if visible
  $("#toggleBtn").on("click", function () {
    $("#welcomeMessage").toggle();
  });

  // Scenario 4: clicking the greeting shows its current text in an alert
  $("#greeting").on("click", function () {
    alert($(this).text());
  });
});
