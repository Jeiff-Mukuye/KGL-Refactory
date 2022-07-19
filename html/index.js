
// // -----------------------
// // Validation with Gertrude
// // ------------------------
// let x = 'graduation';

// if(x !=''){
    
//     if(x.length > 3){
//         console.log('meets criterea');
//     }else {
//         console.log('make sure you have a value longer than 3 xters');
//     }
// }else if (x=='graduation') {
//         console.log('correct spelling');
// }else {
//         console.log('this string is empty');
// }

// // -----------------------
// // Validation with Fred
// // ------------------------
// // Arrow function
// let prodNameVal = (min, inputField, errorname) => {
//     let format  = /^[a-zA-Z]$/;
// // /^[a-zA-Z]$/ /^[a-zA-Z0-9_]+$/
//     if(inputField.value.length == 0 ){
//         if(inputField.value.length < 4){
//             errorname.innerHTML = 'Write full name'
//         }else if(!inputField.value.match(format))
//         {   
//             errorname.innerHTML = 'Use alphabets only';
//             errorname.style.color = 'red';
//             errorname.style.fontSize = '12px';       
//         }
//     }
//        else{ 
//         errorname.innerHTML = 'Correct';
//         errorname.style.color = 'green';
//         errorname.style.fontSize = '12px';
       
//         return true;
//     }
// }
// // normal function
// // function prodNameVal(){

// // }





