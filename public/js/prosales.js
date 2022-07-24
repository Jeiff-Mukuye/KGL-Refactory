const form = document.querySelector('#salesform');
const prodnameInput = document.querySelector('#inputprodname');
const amountpaidInput = document.querySelector('#inputamountpaid');
const tonnageInput = document.querySelector('#inputtonnage');
const dateInput = document.querySelector('#inputdatentime');
const buyersnameInput = document.querySelector('#inputbuyersname');
const salesagentnameInput  = document.querySelector('#inputsaleagentname');

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


//Amountpaid Validation
function validateForm(){
    if(prodnameInput.value.trim() == ''){
        setError(prodnameInput, 'Name can not be empty');
    }else{
        setSuccess(prodnameInput);
    }
    if(amountpaidInput.value.trim().length<5){
        setError(amountpaidInput, 'Enter atleast 5 characters');
    }else{
        setSuccess(amountpaidInput);
    }
    //tonnage Validation
    if(tonnageInput.value.trim()==''){
        setError(tonnageInput, 'This field can not be empty');
    }else{
        setSuccess(tonnageInput);
    }
    //Date Validation
    if(dateInput.value.trim().length < 2){
        setError(dateInput, 'This field should be atleast 2 characters');
    }else{
        setSuccess(dateInput);
    }
    //Buyer name Validation
    if(buyersnameInput.value.trim().length < 2){
        setError(buyersnameInput, 'Name should be atleast 2 characters');
    }else{
        setSuccess(buyersnameInput);
    }
    //Sales agent name Validation
    if(salesagentnameInput.value.trim().length < 2){
        setError(salesagentnameInput, 'Name should be atleast 2 characters');
    }else{
        setSuccess(salesagentnameInput);
    }
};


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








