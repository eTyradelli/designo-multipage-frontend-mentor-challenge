// Form styling

const labels = document.querySelectorAll("label");
const formFields = document.querySelectorAll("input");

for(let field of formFields){
  field.addEventListener("focusin", function(){
    field.parentElement.classList.add("focused-label");
  })

  field.addEventListener("focusout", function(){
    if(!this.value.trim().length){
      field.parentElement.classList.remove("focused-label");
    }
  })
}



// Form validation

const form = document.querySelector("#contact-form");
const name = document.querySelector("#form-name");
const email = document.querySelector("#form-email");
const phone = document.querySelector("#form-phone");
const message = document.querySelector("#form-msg");
const validation = document.querySelector(".validation");


form.addEventListener("onload", form.reset());

form.addEventListener("submit", function(e){
  
  validateForm();

  const inputParents = document.querySelectorAll(".contact__form__fields__field");
  let invalidFields = 0;

  for(let parent of inputParents){
    if(parent.classList.contains("error")){
      invalidFields++;
    }
  }

  if(invalidFields === 0){
    form.submit();
    console.log("Success");
  }else{
    e.preventDefault();
    console.log("Not submitted.");
  }
})


function validateForm(){
  if(!email.value.trim().length){
    setError(email, "Please, provide an email address.")
  }else if(!validEmail(email.value)){
    setError(email, "This is not a valid email address.")
  }else{
    setSuccess(email);
  }

  if(!phone.value.trim().length){
    setError(phone, "Please, provide a phone number.")
  }else  if(!validPhone(phone.value)){
    setError(phone, "This is not a valid phone number.")
  }else{
    setSuccess(phone);
  }

  if(!message.value.trim().length){
    setError(message, "Please, provide a message.")
  }else{
    setSuccess(message);
  }
}

function setError(element, errorMsg){
  element.parentElement.parentElement.classList.add("error");
  const paragraph = element.parentElement.nextElementSibling.querySelector("span");
  paragraph.textContent = errorMsg;
}

function setSuccess(element){
  element.parentElement.parentElement.classList.remove("error");
}

function validEmail(x){
  const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return reg.test(x);
}

function validPhone(n){
  const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return reg.test(n);
}