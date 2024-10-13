const pwd1 = document.getElementById("pwd1");
const pwd2 = document.getElementById("pwd2");
const messageDiv = document.getElementById("pwd3");

pwd1.addEventListener('change', passwordVerifier);
pwd2.addEventListener('change', passwordVerifier);

function passwordVerifier() {
    if (pwd1.value && pwd2.value) {
        if(pwd1.value != pwd2.value){
            window.alert("Passwords don't match");
            pwd1.value = "";
            pwd2.value = "";
            pwd1.focus();
            pwd1.classList.remove('valid');
            pwd1.classList.add('invalid');
        }
        else if(pwd1.value == pwd2.value){
            pwd1.classList.remove('invalid');
            pwd1.classList.add('valid');
        }
    }
}