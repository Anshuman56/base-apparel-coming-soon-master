const form= document.querySelector('form');
const email = document.querySelector('input');
const submit = document.querySelector('button');
const error_msg = document.querySelector('.error-msg');
const error_icon = document.querySelector('.error-icon');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', validate)
submit.addEventListener('click', validate) 

function validate(e){
  e.preventDefault();
  let mail = email.value;
  if(mail.match(pattern)){
   error_msg.innerHTML='';
   error_msg.textContent='Susseful';
   error_msg.style.color='green'; 
   error_icon.style.display='none';
  }
  else{
    error_msg.style.display='block';
    error_icon.style.display='block';
    email.style.border= '2px solid hsl(0, 93%, 68%)';
  }
}





