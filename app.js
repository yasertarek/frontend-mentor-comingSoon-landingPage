// Main Variables
const emailInp = document.getElementById("email-input");
const emailBtn = document.querySelector(".btn");
/* 
    Begin Events
*/
emailBtn.addEventListener("click", (e)=>{
    // Declare Regular Expression for email validation purpose
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Create Error Message Container
    const errMsg = document.createElement('span');
    // Add err-msg Class to Error Message Container
    errMsg.classList.add('err-msg');
    // Check if User Input is Empty
    if(emailInp.value === ""){
        // Prevent Submitting Form
        e.preventDefault();
        // Add message content
        errMsg.textContent = "Whoops! It looks like you forgot to add your email";
        // Remove Any old Error Message if there
        removeElement(emailInp.parentElement, document.querySelector(".err-msg"));
        // Add err Class to Input Element for style purpose
        addClass(emailInp,"err");
        // Check if Error Message is Already in Document or not
        if(!emailInp.parentElement.contains(document.querySelector('.err-msg'))){
            // Add Error Message to Document
            emailInp.parentElement.insertBefore(errMsg,emailInp.nextElementSibling);
            setTimeout(()=>{errMsg.classList.add('err-msg--active');}, 10)
        };
        // Check if User Input is Invalid Email Address
    }else if(!regEx.test(emailInp.value)){
        // Prevent Submitting Form
        e.preventDefault();
        // Add Error Message Content
        errMsg.textContent = "Please provide a valid email address";
        // Remove Any old Error Message if there
        removeElement(emailInp.parentElement, document.querySelector(".err-msg"));
        addClass(emailInp,"err");
        if(!emailInp.parentElement.contains(document.querySelector('.err-msg'))){
            emailInp.parentElement.insertBefore(errMsg,emailInp.nextElementSibling);
            setTimeout(()=>{errMsg.classList.add('err-msg--active');}, 10)
        }
    }else{
        removeElement(emailInp.parentElement, document.querySelector(".err-msg"));
        if(emailInp.classList.contains("err")){
            emailInp.classList.remove("err");
        }
    }
});
/* 
    End Events
    ##########
    Main Functions
*/
function removeElement(parent,element){
    if(parent.contains(element)){
        element.remove();
    }
}
function addClass(element,className){
    if(!element.classList.contains(className)){
        element.classList.add(className);
    }
}