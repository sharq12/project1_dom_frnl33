const firstNameEle = document.querySelector(".fn");
const lastNameEle = document.querySelector(".ln");
const emailEle = document.querySelector(".email");
const passwordEle = document.querySelector(".password");
const btnSubmitEle = document.querySelector(".submit_btn");
const formEle = document.querySelector(".form");
const message = document.querySelector(".message");

var count = 1;

let fn = "";
let ln = "";
let emailId = "";
let password = "";

firstNameEle.addEventListener("keyup", (event)=>{
     fn = event.target.value ;

});

lastNameEle.addEventListener("keyup", (event)=>{
     ln = event.target.value;
});

emailEle.addEventListener("keyup", (event)=>{
     emailId = event.target.value;
     console.log(emailId);
});

passwordEle.addEventListener("keyup", (event)=>{
     password = event.target.value;
});

formEle.addEventListener("submit", (event)=>{
    event.preventDefault();
    count = 2;
    console.log(event);

})

btnSubmitEle.addEventListener("click", (event)=>{
    
    if(fn.length > 0 && ln.length > 0 && emailId.length > 0 && password.length > 0){
        console.log("Form Submitted");
    }
    console.log(" click event triggered ");

    message.innerHTML = "Form successfully submitted";


});




