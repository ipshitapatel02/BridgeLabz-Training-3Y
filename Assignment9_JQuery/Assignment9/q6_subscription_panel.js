$(document).ready(function () {
  // Scenario 5: build a message element, insert it into the DOM, then remove it later
  function showMessage(text) {
    $("<p class='success'></p>")
      .text(text)
      .appendTo("#messages")   // dynamically inserted into the page
      .delay(2500)             // wait 2.5 seconds
      .fadeOut(400, function () {
        $(this).remove();      // remove the element from the DOM when finished
      });
  }

  // Scenario 1: Subscribe enables notifications
  $("#subscribeBtn").on("click", function () {
    $("#notifyStatus").text("ON");
    $("#subscribeBtn").prop("disabled", true);
    $("#unsubscribeBtn").prop("disabled", false);
    showMessage("Notifications enabled. You are now subscribed.");
  });

  // Scenario 2: Unsubscribe disables notifications
  $("#unsubscribeBtn").on("click", function () {
    $("#notifyStatus").text("OFF");
    $("#unsubscribeBtn").prop("disabled", true);
    $("#subscribeBtn").prop("disabled", false);
    showMessage("Notifications disabled. You are unsubscribed.");
  });

  // Handler for clicking a topic name: toggles that topic's subscription
  function toggleTopic() {
    const $item = $(this).closest("li");
    $item.toggleClass("subscribed");

    const topicName = $(this).text();
    showMessage(
      $item.hasClass("subscribed")
        ? "Subscribed to " + topicName
        : "Unsubscribed from " + topicName
    );
  }

  // Attach the events to one topic item (used for old AND newly created items).
  // .on() attaches a handler; it must be called again for each new element.
  function attachTopicEvents($item) {
    $item.find(".topic-name").on("click", toggleTopic);

    $item.find(".remove-topic").on("click", function () {
      const topicName = $item.find(".topic-name").text();

      // Scenario 4: .off("click") detaches the handlers so the removed item can no longer react
      $item.find(".topic-name").off("click");
      $(this).off("click");

      $item.remove();
      showMessage("Removed topic: " + topicName);
    });
  }

  // Scenario 3a: attach events to the five topics that already exist
  $("#topicList li").each(function () {
    attachTopicEvents($(this));
  });

  // Scenario 3b: add a new topic dynamically and attach events to it
  $("#addTopicBtn").on("click", function () {
    const topicName = $("#topicInput").val().trim();
    if (topicName === "") {
      showMessage("Please type a topic name first.");
      return;
    }

    const $newItem = $(
      "<li><span class='topic-name'></span> <button class='remove-topic'>Remove</button></li>"
    );
    $newItem.find(".topic-name").text(topicName); // .text() keeps user input safe from HTML

    $("#topicList").append($newItem);
    attachTopicEvents($newItem);

    $("#topicInput").val("");
    showMessage("Added new topic: " + topicName);
  });
});
