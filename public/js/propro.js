const form = document.querySelector('#proform');
const prodnameInput = document.querySelector('#inputprodname');
const prodtypeInput = document.querySelector('#inputprodtype');
const procdateInput = document.querySelector('#inputprocdate');
const proctimeInput = document.querySelector('#inputproctime');
const tonnageInput = document.querySelector('#inputtonnage');
const dealernameInput = document.querySelector('#inputdealername');
const branchnameInput = document.querySelector('#inputbranchname');
const branchcontactInput = document.querySelector('#inputbranchcontact');
const salepriceInput = document.querySelector('#inputsaleprice');
const prodcostInput = document.querySelector('#inputprodcost');

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

//Form Fields validations
function validateForm(){
    //product name field
    if(prodnameInput.value.trim()==''){
        setError(prodnameInput, 'Name cannot be empty'); 
    }else if(!alphanumerics(prodnameInput.value)){
        setError(prodnameInput, 'Use only alphanumeric');
    }else{
        setSuccess(prodnameInput);
    }
    //Type of Item Validation
    if(prodtypeInput.value.trim().length < 2){
        setError(prodtypeInput, 'Type should be atleast 2 characters');
    }else if(!onlyAlpabets(prodtypeInput.value)){
        setError(prodtypeInput, 'Use only alphabets');
    }else{
        setSuccess(prodtypeInput);
    }
    //Date procurement validation
    if(procdateInput.value.trim()==''){
        setError(procdateInput, 'Date cannot be empty'); 
    }else{
        setSuccess(procdateInput);
    }
    //Tonnage validation
    if(tonnageInput.value.trim().length < 3 || tonnageInput.value.trim() < 1000){
        setError(tonnageInput, 'Value below min required tonnage');
    }else{
        setSuccess(tonnageInput);
    }
    //Cost Validation
    if(prodcostInput.value.trim().length < 5){
        setError(prodcostInput, 'Enter atleast 5 numbers');
    }else{
        setSuccess(prodcostInput);
    }
    //Dealer name validation
    if(dealernameInput.value.trim().length < 2){
        setError(dealernameInput, 'Name shoud be atleast 2 charachers');
    }else{
        setSuccess(dealernameInput);
    }
    //Branch Contact
    if(branchcontactInput.value.trim().length < 10 || branchcontactInput.value.trim().length > 13){
        setError(branchcontactInput, 'Phone number is incorrect');
    }else{
        setSuccess(branchcontactInput);
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

//function for Only Alphabets
function onlyAlpabets(prodtypeInput){
    const reg =/^[A-Za-z]+$/;
    return reg.test(prodtypeInput);
}

//function for Only Alphabets
function alphanumerics(prodtypeInput){
    const reg =/^[A-Za-z0-9]+$/;
    return reg.test(prodtypeInput);
}

// //function for Alphanumeric
// function alphanumerics(dealernameInput){
//     const reg =/^[a-z0-9]*$/i;
//     return reg.test(dealernameInput);
// }


// // Function to check letters and numbers
// function alphanumeric(dealernameInput)
// {
//  const letterNumber = /^[0-9a-zA-Z]+$/;
//  return reg.test(dealernameInput);
// }