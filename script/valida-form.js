const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const telRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

form.addEventListener('submit', (event) =>{
    //event.preventDefault();
    nameValidate();
    telValidate();
    emailValidate();
});


function setError(index){
    campos[index].style.border = '2px solid #d64400';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }else{
        removeError(0);
    }
}

function telValidate(){
    if(!telRegex.test(campos[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[2].value)){
        setError(2);
    }else{
        removeError(2);
    }
}