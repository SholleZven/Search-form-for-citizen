var form = document.querySelector(".form_validate");
var validateBtn = form.querySelector(".validate_Btn");
var family = form.querySelector(".family");
var firstName = form.querySelector(".name");
var dad_name = form.querySelector(".dad_name");
var tel = form.querySelector(".tel");
var big_text = form.querySelector(".big_text");
var fields = form.querySelectorAll(".field");

validateBtn.addEventListener("click", function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("field is blank", fields[i]);
      var error = document.createElement("div");
      error.className = "error";
      error.style.color = "red";
      error.innerHTML = "Cannot be blank";
      fields[i].parentElement.appendChild(error);
    }
  }
});
