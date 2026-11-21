$(document).ready(function () {
  let postNumber = 5; // five posts already exist in the HTML

  // Build one post element with jQuery (so new posts look like the existing ones)
  function buildPost(title, body, isFeatured) {
    const $post = $("<article class='post'></article>");
    if (isFeatured) $post.addClass("featured");

    $post.append(
      $("<h3></h3>").text(title),
      $("<p class='post-body'></p>").text(body),
      $(
        "<div class='post-actions'>" +
          "<button class='tag-after'>Tag after title</button> " +
          "<button class='label-before'>Label before title</button>" +
        "</div>"
      )
    );
    return $post;
  }

  // Scenario 1: .append() adds the new post at the END of the list
  $("#addPostBtn").on("click", function () {
    postNumber++;
    $("#postList").append(
      buildPost("New Post " + postNumber, "Content of post number " + postNumber + ".", false)
    );
  });

  // Scenario 2: .prepend() adds the featured post at the START of the list
  $("#prependPostBtn").on("click", function () {
    postNumber++;
    $("#postList").prepend(
      buildPost("Featured Post " + postNumber, "A special featured article.", true)
    );
  });

  // Scenario 3: select the last post and delete it
  $("#removeLastBtn").on("click", function () {
    $("#postList .post").last().remove();
  });

  // Read the tag text from the input (use "general" when it is empty)
  function getTagText() {
    const text = $("#tagInput").val().trim();
    return text === "" ? "general" : text;
  }

  // Scenario 4: event delegation - one handler on the list also works for posts added later.
  // .after() inserts the tag AFTER the title, .before() inserts the label BEFORE it.
  $("#postList").on("click", ".tag-after", function () {
    $(this).closest(".post").find("h3").after(
      $("<span class='tag'></span>").text("#" + getTagText())
    );
  });

  $("#postList").on("click", ".label-before", function () {
    $(this).closest(".post").find("h3").before(
      $("<span class='label'></span>").text(getTagText().toUpperCase())
    );
  });

  // Scenario 5: highlight every post whose title or body contains the keyword
  $("#highlightBtn").on("click", function () {
    const keyword = $("#keywordInput").val().trim().toLowerCase();

    $("#postList .post").each(function () {
      const postText = $(this).find("h3, .post-body").text().toLowerCase();

      // .toggleClass(name, condition) adds the class when true and removes it when false
      $(this).toggleClass("highlight", keyword !== "" && postText.includes(keyword));
    });
  });
});
