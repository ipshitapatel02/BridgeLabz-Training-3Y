$(document).ready(function () {
  // Save each original title once, so highlighting can always be undone
  $(".course-title").each(function () {
    $(this).data("original", $(this).text());
  });

  // Escape special regex characters so typing "." or "(" cannot break the search
  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Filter, highlight and count in one function
  function filterCourses() {
    const searchTerm = $("#searchInput").val().trim();
    const lowerTerm = searchTerm.toLowerCase();
    let matchCount = 0;

    $(".course").each(function () {
      const $title = $(this).find(".course-title");
      const originalTitle = $title.data("original");
      const descriptionText = $(this).find("p").text();

      // A course matches if the term appears in its title or description (case-insensitive)
      const isMatch =
        lowerTerm === "" ||
        (originalTitle + " " + descriptionText).toLowerCase().includes(lowerTerm);

      // Scenario 3: .toggle(true) shows the course, .toggle(false) hides it
      $(this).toggle(isMatch);
      if (isMatch) matchCount++;

      // Scenario 2: wrap the matching part of the title in a span, then style it with .css()
      if (lowerTerm !== "") {
        const pattern = new RegExp("(" + escapeRegex(searchTerm) + ")", "gi");
        $title.html(originalTitle.replace(pattern, "<span class='match'>$1</span>"));
        $title.find(".match").css({
          "background-color": "yellow",
          "font-weight": "bold"
        });
      } else {
        $title.text(originalTitle); // empty search: restore the plain title
      }
    });

    // Scenario 4: show the number of matching courses
    $("#courseCount").text(matchCount);
    $("#noCourses").toggle(matchCount === 0);
  }

  // Scenario 1: .keyup() runs after every key release in the search box
  $("#searchInput").keyup(filterCourses);

  // Scenario 5: clearing the search resets the list to show every course
  $("#clearBtn").on("click", function () {
    $("#searchInput").val("").focus();
    filterCourses();
  });
});
