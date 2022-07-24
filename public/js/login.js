const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password')

emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@#$!%*?&^()]{8,}$/

function loginValidation(){
    if (emailInput.value == "" || !emailRegex.test(emailInput.value)) {
        emailInput.style.border = "1px solid red";
        alert("Please enter a valid e-mail address.");
        emailInput.focus();
        return false;
      }
      else {
        emailInput.style.border = "1px solid green";
      }
      //password validation
      if (passInput.value == "" || passInput.value.length <= 6) {
        alert("Please enter your password");
        passInput.style.border = "1px solid red";
        alert("Please enter your password");
        passInput.focus();
        return false;
      }
      else {
        passInput.style.border = "1px solid green";
      }
    
    
}

//|| !passRegex.test(passInput.value) to be added in the