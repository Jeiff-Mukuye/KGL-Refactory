const form = document.querySelector('#loginform');
// const usernameInput = document.querySelector('#username');
const usernameInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');


// form onsubmit event listener
form.addEventListener('submit', (event) => {
    
    validateForm();//call the validation function
    //calling the input field check function
    if(isFormValid() == true){
        form.submit();
    }else{
        event.preventDefault();//prevent form from submitting
    }
});

//Check if there is any error in the input fields
function isFormValid(){
    const inputFields = form.querySelectorAll('.input-control');
    let result = true;
    //checking each field for error values
    inputFields.forEach((field) => {
        if(field.classList.contains('error')){
            result = false;
        }
    });

    return result;
}


//validation function
function validateForm() {
    //username validation
    // if(usernameInput.value.trim() =='') { //if username is empty
    //     setError(usernameInput, 'This field cannot be empty');//seterro function, parse the field, then the message
    // }else if(usernameInput.value.trim().length < 5 || usernameInput.value.trim.length > 15){
    //     setError(usernameInput, 'Name must be min 5 and max 15 characters');
    // }else {
    //     setSuccess(usernameInput, '');
    // }
    //email validation
    if(usernameInput.value.trim() == ''){
        setError(usernameInput, 'Provide an email address');
    }else if(isEmailValid(usernameInput.value)){
        setSuccess(usernameInput);
    }else{
        setError(usernameInput, 'Provide a valid email address')
    }
    //password validation
    if(passwordInput.value.trim() == '') {
        setError(passwordInput, 'This field cannot be empty');
    }else if(passwordInput.value.trim().length < 8){
        setError(passwordInput, 'Password MUST be atleast 8 characters');
        }
    //else if(passwordInput.value.trim() == (isPassValid.value)){
    //         setError(passwordInput, 'Use the correct password format');
        
    // }
    else{
        setSuccess(passwordInput);
    }
        
    //confirm password validation
    if(confirmPasswordInput.value.trim() == '') {
        setError(confirmPasswordInput, 'Please confirm your password');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Passwords do not match');
    }else{
        setSuccess(confirmPasswordInput);
    }
}

//SetError function
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
    
}

// SetSuccess Function
function setSuccess(element, successMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = successMessage;
}

// Check for valid Email function
function isEmailValid(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
}

// Check for valid password format
    // function isPassValid(password) {
    //     const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@#$!%*?&^()]{8,}$/;
    //     return passRegex.test(password);
    // }
//let isPassValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
    // let isPassValid = /("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")/;
// else if(usernameInput.value.trim() !== '^[a-zA-Z]*$' ){
//     setError(usernameInput, 'Your name contains digits');
// }  