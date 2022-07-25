const form = document.querySelector('#credform');
const buyernameInput = document.querySelector('#inputbuyername');
const ninInput = document.querySelector('#inputnin');
const locationInput = document.querySelector('#inputlocation');
const buyercontactInput = document.querySelector('#inputbuyercontact');
const amountdueInput = document.querySelector('#inputamountdue');
const duedateInput = document.querySelector('#inputduedate');
const prodnameInput = document.querySelector('#inputprodname');
const prodtypeInput = document.querySelector('#inputprodtype');
const tonnageInput = document.querySelector('#inputtonnage');
const dispatchdateInput = document.querySelector('#inputdispatchdate');
const agentnameInput = document.querySelector('#inputsaleagentname');


form.addEventListener('submit', (event)=>{
    
    validateForm();

    if(isFormValid()==true){
        form.submit();
    }else{
        event.preventDefault();
    }
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.form-group');
    let result = true
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    return result;
}

//Type of Item Validation
function validateForm(){
    //NIN Validation
    if(ninInput.value.trim().length < 2){
        setError(ninInput, 'Type should be atleast 2 characters');
    }else if(!alphanumerics(ninInput.value)){
        setError(ninInput, 'No special characters allowed');
    }else{
        setSuccess(ninInput);
    }
    //Buyer name Validation
    if(buyernameInput.value.trim().length < 2){
        setError(buyernameInput, 'Field should contain atleast 2 characters');
    }else if(!alphanumericsone(buyernameInput.value)){
        setError(buyernameInput, 'No special characters allowed');
    }else{
        setSuccess(buyernameInput);
    }
    //location Validation
    if(locationInput.value.trim().length < 2){
        setError(locationInput, 'Field should contain atleast 2 characters');
    }else{
        setSuccess(locationInput);
    }
    //contacts Validation
    if(buyercontactInput.value.trim().length < 10 || buyercontactInput.value.trim().length > 13){
        setError(buyercontactInput, 'Phone number is incorrect');
    }else{
        setSuccess(buyercontactInput);
    }
    //amount due Validation
    if(amountdueInput.value.trim().length < 5){
        setError(amountdueInput, 'Enter atleast 5 numbers');
    }else{
        setSuccess(amountdueInput);
    }
    // Sales agent name vValidation
    if(agentnameInput.value.trim().length < 2){
        setError(agentnameInput, 'Name shoud be atleast 2 charachers');
    }else if(!alphanumericstwo(agentnameInput.value)){
        setError(agentnameInput, 'No special characters allowed');
    }else{
        setSuccess(agentnameInput);
    }
    //Produce name Validation
    if(prodnameInput.value.trim().length < 2){
        setError(prodnameInput, 'Name shoud be atleast 2 charachers');
    }else if(!alphanumericsthree(prodnameInput.value)){
        setError(prodnameInput, 'No special characters allowed');
    }else{
        setSuccess(prodnameInput);
    }
}
//function for Alphanumeric
function alphanumerics(ninInput){
    const reg =/^[a-z0-9]*$/i;
    return reg.test(ninInput);
}
//function for Alphanumericone
function alphanumericsone(buyernameInput){
    const reg =/^[a-z0-9]*$/i;
    return reg.test(buyernameInput);
}

//function for Alphanumerictwo
function alphanumericstwo(agentnameInput){
    const reg =/^[a-z0-9]*$/i;
    return reg.test(agentnameInput);
}

//function for Alphanumericthree
function alphanumericsthree(prodnameInput){
    const reg =/^[a-z0-9]*$/i;
    return reg.test(prodnameInput);
}

// Set Error Function
function setError(element,errorMessage){
    const parent=element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
};

//Set Success Function
function setSuccess(element,successMessage){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = successMessage;
}