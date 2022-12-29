var form = document.querySelector(".form_validate");
var validateBtn = form.querySelector(".validate_Btn");
var name = form.querySelector(".name");
var family = form.querySelector(".family");
var dad_name = form.querySelector(".dad_name");
var tel = form.querySelector(".tel");
var big_text = form.querySelector(".big_text");
var fields = form.querySelectorAll(".field");

var generateError = function (text) {
  var error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  return error;
};

var removeValidation = function () {
  var errors = form.querySelectorAll(".error");

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("field is empty", fields[i]);
      var error = generateError("ПОле");
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
};

form.addEventListener("click", function (event) {
  event.preventDefault();

  removeValidation();

  checkFieldsPresence();
});
