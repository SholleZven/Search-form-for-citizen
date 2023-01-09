var form = document.querySelector(".form_validate");
var validateBtn = form.querySelector(".validate_Btn");
var family = form.querySelector(".family");
var firstName = form.querySelector(".name");
var dad_name = form.querySelector(".dad_name");
var tel = form.querySelector(".tel");
var text = form.querySelectorAll(".text");
var fields = form.querySelectorAll(".field");
var shields = form.querySelectorAll(".text, .big_text");
var array = ["Фамилия", "Имя", "Отчество", "Телефон", "Обращение"];

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
    console.clear();
  }
};

var checkFieldsPresence = function () {
  for (var i = 0; i < shields.length; i++) {
    if (!fields[i].value) {
      var error = generateError("Поле незаполнено");
      shields[i].appendChild(error);
      console.log("field: " + array[i] + " is blank");
    } else {
      console.log(array[i] + ": " + fields[i].value);
    }
  }
};

validateBtn.addEventListener("click", function () {
  removeValidation();
  checkFieldsPresence();
});
