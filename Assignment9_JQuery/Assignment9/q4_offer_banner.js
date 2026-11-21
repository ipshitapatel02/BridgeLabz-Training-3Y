$(document).ready(function () {
  // Return the banner(s) chosen in the dropdown: all of them, or just one
  function getTargetBanners() {
    const choice = $("#bannerTarget").val();
    const $allBanners = $("#bannerList .banner");

    if (choice === "all") return $allBanners;
    return $allBanners.eq(Number(choice) - 1); // .eq(index) picks one element
  }

  // Scenarios 1 and 2: instant hide / show
  $("#hideBtn").on("click", function () {
    getTargetBanners().hide();
  });
  $("#showBtn").on("click", function () {
    getTargetBanners().show();
  });

  // Scenario 3: sliding animations change the height smoothly
  $("#slideUpBtn").on("click", function () {
    getTargetBanners().slideUp(400);
  });
  $("#slideDownBtn").on("click", function () {
    getTargetBanners().slideDown(400);
  });

  // Scenario 4: fading animations change the opacity gradually
  $("#fadeOutBtn").on("click", function () {
    getTargetBanners().fadeOut(600);
  });
  $("#fadeInBtn").on("click", function () {
    getTargetBanners().fadeIn(600);
  });

  // Scenario 5: automatic rotation of the promo slides
  const $slides = $("#rotator .slide");
  let currentSlide = 0;

  // Start with only the first slide visible
  $slides.hide().eq(currentSlide).show();

  // Every 5000 ms: fade the current slide out, then fade the next one in.
  // The next slide is started inside the fadeOut callback so the two never overlap.
  setInterval(function () {
    $slides.eq(currentSlide).fadeOut(400, function () {
      currentSlide = (currentSlide + 1) % $slides.length; // loop back to the first
      $slides.eq(currentSlide).fadeIn(400);
    });
  }, 5000);
});
