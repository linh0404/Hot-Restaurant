$("#search-btn").on("click", function() {
  var searchedCharacter = $("#character-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  $.get("/api/reservations/", function(data) {
    console.log(data);

    $("#stats").show();
    $("#customerName").text(data.name);
    $("#customerPhone").text(data.phoneNo);
    $("#customerEmail").text(data.email);
    $("#customerID").text(data.uniqueId);
  });
});
