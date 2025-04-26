$("#s-sel").click(function() {
    $("#film-types").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#s-film-sel").removeClass("hidden").hide().fadeIn(400);
    },400);
});

$("#f-sel").click(function() {
    $("#film-types").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#f-film-sel").removeClass("hidden").hide().fadeIn(400);
    },400);
});

$(".s-film-submit-back").click(function(){
    $("#s-film-sel").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#film-types").removeClass("hidden").hide().fadeIn(400);
    },400);    
});

$(".f-film-submit-back").click(function(){
    $("#f-film-sel").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#film-types").removeClass("hidden").hide().fadeIn(400);
    },400);    
});

$("#International-Short > p").click(function(){
    $(".International-Short-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Documentry-Short > p").click(function(){
    $(".Documentry-Short-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#New-York-City-Short > p").click(function(){
    $(".New-York-City-Short-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Animated-Short > p").click(function(){
    $(".Animated-Short-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Canadian-Short > p").click(function(){
    $(".Canadian-Short-card").slideToggle(400);

    var icon = $(".chevron-icon")
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Narrative-Short > p").click(function(){
    $(".Narrative-Short-card").slideToggle(400);

    var icon = $(".chevron-icon")
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#International-Feature > p").click(function(){
    $(".International-Feature-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Documentry-Feature > p").click(function(){
    $(".Documentry-Feature-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#New-York-City-Feature > p").click(function(){
    $(".New-York-City-Feature-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Animated-Feature > p").click(function(){
    $(".Animated-Feature-card").slideToggle(400);

    var icon = $(this).find("img");
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Canadian-Feature > p").click(function(){
    $(".Canadian-Feature-card").slideToggle(400);

    var icon = $(".chevron-icon")
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});

$("#Narrative-Feature > p").click(function(){
    $(".Narrative-Feature-card").slideToggle(400);

    var icon = $(".chevron-icon")
    if (icon.attr("src") === "./assets/svg/chevron-down.svg") {
        icon.attr("src", "./assets/svg/chevron-up.svg");
      } else {
        icon.attr("src", "./assets/svg/chevron-down.svg");
      }
});