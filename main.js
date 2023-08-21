function validation() {
    var emailFld = document.getElementById("email-faild");
  var errorEmail = document.getElementById("error-email");
  
    if (!emailFld.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmail.innerHTML = "please check your email";
      emailFld.style.border = " solid #e73134";
      
    } else {
        errorEmail.innerHTML = "";
        emailFld.style.border = " solid black";
    }
    if (emailFld.value == 0) {
      errorEmail.innerHTML = "";
      emailFld.style.border = " solid black";
    }

};
function pageOne() {
  var emailFld = document.querySelector("#email-faild");
  const btn = document.querySelector(".page-one");
  if (emailFld.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    btn.style.display = "none";
  }
};

function validationT() {
  var emailFldT = document.getElementById("email-faildT");
var errorEmailT = document.getElementById("error-emailT");

  if (!emailFldT.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      
    errorEmailT.innerHTML = "please check your email";
        emailFldT.style.border = " solid #ee7678";
    
  } else {
      errorEmailT.innerHTML = "";
      emailFldT.style.border = " 0.5px solid black";
  }
  if (emailFldT.value == 0) {
    errorEmailT.innerHTML = "";
    emailFldT.style.border = " none";
  }

};
function pageOneT() {
var emailFldT = document.querySelector("#email-faildT");
const btn = document.querySelector(".page-one");
if (emailFldT.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  btn.style.display = "none";
}
};



