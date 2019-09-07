//Capture Button Click
$("#submit").on("click", function(event) {
    event.preventDefault();

    //Grabbed values from text boxes
    var data = {
    customer_Name: $("#name-input").val().trim(),
    phcustomer_Phone: $("#phone-input").val().trim(),
    customer_Email: $("#email-input").val().trim(),
    customer_UniqueID: $("#uniqueid-input").val().trim(),
    }

    $.post( "/api/reserve", data );
    
});
console.log("make.js test");

