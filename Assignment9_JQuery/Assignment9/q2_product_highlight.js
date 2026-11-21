$(document).ready(function () {
  // Scenario 4: the attribute selector [data-discount] matches only products that
  // have that attribute, so only discounted products get the "on-sale" style
  $(".product[data-discount]").addClass("on-sale");

  // Scenarios 1 and 5: clicking a product
  $(".product").on("click", function () {
    // .data("stock") reads the data-stock attribute (jQuery converts it to a number)
    if ($(this).data("stock") === 0) {
      alert($(this).find("h2").text() + " is out of stock!");
      return; // out-of-stock items cannot be highlighted
    }

    // Remove the highlight from every product, then highlight only the clicked one
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  // Scenario 2: .hover() takes two functions - mouse enter and mouse leave
  $(".product").hover(
    function () {
      // .stop(true, true) prevents animations from piling up on fast mouse movement
      $(this).find(".details").stop(true, true).slideDown(150);
    },
    function () {
      $(this).find(".details").stop(true, true).slideUp(150);
    }
  );

  // Scenario 3: the heart toggles the "selected" class
  $(".fav").on("click", function (event) {
    // Stop the click from bubbling up, otherwise the product would also be highlighted
    event.stopPropagation();
    $(this).toggleClass("selected");
  });
});
