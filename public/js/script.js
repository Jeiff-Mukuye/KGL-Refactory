 var loginform = document.getElementById('form');
 var empno = document.getElementById('empno');
 var pwd = document.getElementById('pwd');

 form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
 });

 /*---------------------
Validation for the Employee Number field
 ---------------------------*/
//Adding the error message and html element
var setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//Adding success event action
var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


/*---------------------
Validation for the password field
 ---------------------------*/

//Avoid white spaces
 const validateInputs = () => {
    const empnoValue = empno.value.trim();
    const pwdValue = pwd.value.trim();
//adding the conditions
    if(empnoValue === '') {
        setError(empno, 'Employee number is required');
    }
    else {
        setSuccess(empno);
    }
 }