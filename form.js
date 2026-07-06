var myForm = document.forms.myform;
var message = document.getElementById("message");
myForm.onsubmit = function () {
     if (myForm.name.value == "") {
          message.innerHTML = "Please enter your name.";
          return false;
     }
      else {
        message.innerHTML = "";
        return true;
     }
}       