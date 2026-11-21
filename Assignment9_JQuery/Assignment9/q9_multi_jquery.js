// Scenario 5: jQuery.noConflict(true) was called in the HTML after loading each library.
// It gives the library back to us as a variable and restores the global $ and jQuery,
// so jqV1 (jQuery 1.12.4) and jqV3 (jQuery 3.7.1) can live on the same page together.

// ---------- Version 1 (jQuery 1.12.4): carousel + active widget ----------
jqV1(function () {
  const $slides = jqV1(".carousel .slide");
  let currentSlide = 0;

  // Scenario 1: show the first slide, then rotate every 3 seconds
  $slides.hide().eq(currentSlide).show();

  setInterval(function () {
    $slides.eq(currentSlide).fadeOut(300, function () {
      currentSlide = (currentSlide + 1) % $slides.length;
      $slides.eq(currentSlide).fadeIn(300);
    });
  }, 3000);

  // Scenario 3: clicking a widget makes it the active (highlighted) one
  jqV1(".widget").on("click", function () {
    jqV1(".widget").removeClass("active-widget");
    jqV1(this).addClass("active-widget");
  });
});

// ---------- Version 2 (jQuery 3.7.1): modal + tooltips ----------
jqV3(function () {
  // Scenario 2: open the notification modal (the overlay uses flex to centre the box)
  jqV3("#openModalBtn").on("click", function () {
    jqV3("#modalOverlay").css("display", "flex").hide().fadeIn(200);
  });

  // Close with the button, or by clicking the dark area outside the box
  jqV3("#closeModalBtn").on("click", function () {
    jqV3("#modalOverlay").fadeOut(200);
  });
  jqV3("#modalOverlay").on("click", function (event) {
    // Only close when the overlay itself was clicked, not the box inside it
    if (event.target === this) {
      jqV3(this).fadeOut(200);
    }
  });

  // Scenario 4: tooltips - create on mouse enter, remove on mouse leave
  jqV3(".tip-item").on("mouseenter", function (event) {
    const tipText = jqV3(this).data("tip");

    jqV3("<div class='tooltip'></div>")
      .text(tipText)
      .css({ top: event.pageY + 15, left: event.pageX + 10 })
      .appendTo("body");
  });

  jqV3(".tip-item").on("mouseleave", function () {
    jqV3(".tooltip").remove();
  });

  // Show which version each name refers to, and prove the globals were released
  jqV3("#versionInfo").text(
    "jqV1 = jQuery " + jqV1.fn.jquery +
    " | jqV3 = jQuery " + jqV3.fn.jquery +
    " | global window.jQuery after noConflict: " + typeof window.jQuery
  );
});
