

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var gender = $("input:radio[name=gender]:checked").val();
    var age = parseInt($("input#age").val());
    var interest = $("#interest").val();
    var result;

    $(".julian").hide();
    $(".josh").hide();
    $(".salma").hide();
    $(".margot").hide();

    if (gender === "both" && age >= 40) {
      if (interest === "Music") {
        result = "julian";
      }
      else {
        result = "salma";
      }
    }
    else if (gender === "both" && age < 40) {
      if (interest === "Movies") {
        result = "josh";
      }
      else {
        result = "margot";
      }
    }
    else if (gender === "men") {
      if (age >= 40) {
        result = "julian";
      }
      else {
        result = "josh";
      }
    }
    else if (gender === "women") {
      if (age >= 40) {
        result = "salma";
      }
      else {
        result = "margot";
      }
    }

    if (result === "julian") {
      $(".julian").show();
    }
    else if (result === "josh") {
      $(".josh").show();
    }
    else if (result === "margot") {
      $(".margot").show();
    }
    else if (result === "salma") {
      $(".salma").show();
    }
    else {
      alert("Something went wrong");
    }
  });
});
