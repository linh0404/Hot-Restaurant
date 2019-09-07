//Capture Button Click
$("#submit").on("click", function(event) {
    event.preventDefault();

    //Grabbed values from text boxes
    var data = {
    name: $("#name-input").val().trim(),
    phoneNo: $("#phone-input").val().trim(),
    email: $("#email-input").val().trim(),
    uniqueId: $("#uniqueid-input").val().trim(),
    }

    $.post( "/api/reserve", data );
    
});
console.log("make.js test");

