function emailValidator(){
    var email = document.getElementById('email');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    

    if (email.value.match(pattern)){
        email.classList.add("valid");
        email.classList.remove("invalid");
    }
    else{
        email.classList.remove("valid");
        email.classList.add("invalid");
    }
}
function numberValidator(){
    const input = document.querySelector('#whatsapp');
    var numRegex = /^[(]([0-9][0-9])[)]([0-9]{5})[-]([0-9]{4})$/;
    if(input.value.match(numRegex)){
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else{
        input.classList.remove('valid');
        input.classList.add('invalid'); 
    }
}