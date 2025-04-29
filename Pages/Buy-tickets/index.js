var numberOfTickets = 0;

$(".buy-btn").click(function() {
    $(this).closest('#morning-evening').hide();
});

$("#morning-buy").click(function() {
    $("#morning-show").removeClass("hidden").hide().fadeIn(400);
});

$("#evening-buy").click(function() {
    $("#evening-show").removeClass("hidden").hide().fadeIn(400);
});

$(".movie-back-btn-evening").click(()=>{
    $("#evening-show").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#morning-evening").fadeIn(400);
    },400);    
});

$(".movie-back-btn-morning").click(()=>{
    $("#morning-show").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#morning-evening").fadeIn(400);
    },400);    
});

$(".TheRedDress").click(()=>{
    window.open("https://youtu.be/oWchYG1ebO0?si=j0K2cKbSsXkQtMdF","_blank");
});

$(".Balanchine").click(()=>{
    window.open("https://youtu.be/fen7PUat34U?si=r84Ppl1HJ0r0E__S","_blank");
});

$("#evening-checkout-btn").click(()=>{
    $("#evening-show").addClass("hidden").show().fadeOut(400);
    $("#evening-checkout").removeClass("hidden").hide().fadeIn(400);
});

$(".evening-checkout-back-btn").click(()=>{
    $("#evening-checkout").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#evening-show").fadeIn(400);
    },400);    
});

// $("#morning-checkout-btn").click(()=>{
//     $("#morning-show").addClass("hidden").show().fadeOut(400);
//     $("#morning-checkout").removeClass("hidden").hide().fadeIn(400);
// });

$(".morning-checkout-back-btn").click(()=>{
    $("#morning-checkout").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#morning-show").fadeIn(400);
    },400);    
});

$(".person").on("click", function () {
    $(".person").removeClass("current-sel").removeAttr("data-selected");
    $(this).addClass("current-sel").attr("data-selected", "true");
    numberOfTickets = $(this).attr("id");

    if (numberOfTickets === "1-e") {
        $(".image-vehicle").html("<img src='./assets/images/smallCar.png' alt='back-button'>");
        numberOfTickets = 1;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "2-e" ) {
        $(".image-vehicle").html("<img src='./assets/images/smallCar.png' alt='back-button'>");
        numberOfTickets = 2;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "3-e" ) {
        $(".image-vehicle").html("<img src='./assets/images/smallCar.png' alt='back-button'>");
        numberOfTickets = 3;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "4-e" ) {
        $(".image-vehicle").html("<img src='./assets/images/bigCar.png' alt='back-button'>");
        numberOfTickets = 4;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "5-e" ) {
        $(".image-vehicle").html("<img src='./assets/images/bigCar.png' alt='back-button'>");
        numberOfTickets = 5;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "6-e" ) {
        $(".image-vehicle").html("<img src='./assets/images/bigCar.png' alt='back-button'>");
        numberOfTickets = 6;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "7-e" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 7;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "8-e" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 8;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "9-e" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 9;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "10-e" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 10;
        $("#pay-now-evening").removeClass("hidden").hide().fadeIn(400);
        $("#evening-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#evening-tkts-total").html("Total : <strong>$"+numberOfTickets*15+"</strong>");
    }
    if (numberOfTickets === "1-m" ) {
        $(".image-vehicle").html("<img src='./assets/images/smallCar.png' alt='back-button'>");
        numberOfTickets = 1;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "2-m" ) {
        $(".image-vehicle").html("<img src='./assets/images/smallCar.png' alt='back-button'>");
        numberOfTickets = 2;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "3-m" ) {
        $(".image-vehicle").html("<img src='./assets/images/smallCar.png' alt='back-button'>");
        numberOfTickets = 3;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "4-m" ) {
        $(".image-vehicle").html("<img src='./assets/images/bigCar.png' alt='back-button'>");
        numberOfTickets = 4;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "5-m" ) {
        $(".image-vehicle").html("<img src='./assets/images/bigCar.png' alt='back-button'>");
        numberOfTickets = 5;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "6-m" ) {
        $(".image-vehicle").html("<img src='./assets/images/bigCar.png' alt='back-button'>");
        numberOfTickets = 6;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "7-m" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 7;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "8-m" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 8;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "9-m" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 9;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
    if (numberOfTickets === "10-m" ){
        $(".image-vehicle").html("<img src='./assets/images/bus.png' alt='back-button'>");
        numberOfTickets = 10;
        $("#pay-now-morning").removeClass("hidden").hide().fadeIn(400);
        $("#morning-tkts").html("Tickets : <strong>"+numberOfTickets+"</strong>");
        $("#morning-tkts-total").html("Total : <strong>$"+numberOfTickets*10+"</strong>");
    }
});