function submited(){
    const element = document.getElementById("submited-popup");
    const email = document.getElementById("email");
    const whatsapp = document.getElementById('whatsapp');
    const name = document.getElementById('name');
    const invalidSubmit = document.getElementById('invalidSubmit');
    const form = document.getElementById('form')

    
    if(name.value != ''){
        if(whatsapp.classList.contains('valid')){
            if(email.classList.contains('valid')){
                // alert(name.value)
                form.submit()
                email.value = '';
                email.classList.remove('valid');
                whatsapp.value = '';
                whatsapp.classList.remove('valid');
                name.value = '';
                invalidSubmit.classList.remove('validateSubmit');
                setTimeout(() => { element.classList.add('open'); }, 3000);
            } else {
                invalidSubmit.classList.add('validateSubmit');
            }
        } else {
            invalidSubmit.classList.add('validateSubmit');
        }
    } else {
        invalidSubmit.classList.add('validateSubmit');
    }
}