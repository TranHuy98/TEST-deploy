// //dropdown

$(".has-dropdown").click(function () {
  if ($("#dropdown").css("display") == "none") {
    $("#dropdown").slideDown(300);
    console.log("down");
  } else {
    $("#dropdown").slideUp(300);
    console.log("up");
  }
});

// mobi menu

$("#header-menu-button").click(function () {
  if ($("#menu-mobi").css("display") == "none") {
    $("#menu-mobi").slideDown(300);
  } else {
    $("#menu-mobi").slideUp(300);
  }
});

// mobi menu
$(".menu-mobi-item").click(function () {
  if ($(this).find(".menu-mobi-child").css("display") == "block") {
    $(this).find(".menu-mobi-child").slideUp(300);
  } else {
    $(this).parent().find(".menu-mobi-child").slideUp(300);
    $(this).find(".menu-mobi-child").slideDown(300);
  }
});

//back to top

$(window).scroll(function () {
  let position = $("html,body").scrollTop();

  if (position > 500) {
    $("#back-to-top").css("visibility", "visible");
  } else {
    $("#back-to-top").css("visibility", "hidden");
  }
});
$("#back-to-top").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
