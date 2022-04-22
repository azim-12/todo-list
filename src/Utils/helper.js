export const getLocaleItems = () => {
    let list = localStorage.getItem('lists');

    if (list) {
        let parse = JSON.parse(list);
        return parse;
    } else {
        return [];
    }
}

export const verifyInput = (e) => {
    e.preventDefault();

    let showNameErr = document.getElementById("errName")
    let showMailErr = document.getElementById("errMail")
    let showPassErr = document.getElementById("errPass")

    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let passInput = document.getElementById('password');

    let verifyName = nameInput.value.match(/^[\w][^0-9\/"\'\-,.`^_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/gi);
    let verifyMail = emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let verifyPass = passInput.value.match(/^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);

    showNameErr.innerHTML='';
    showMailErr.innerHTML='';
    showPassErr.innerHTML='';

    // Name Verification
    if (!verifyName) {
        nameInput.classList.add("err-msg")
        showNameErr.innerHTML = 'Please enter valid Full Name';
    }

    // email verification
    if (!verifyMail) {
        emailInput.classList.add("err-msg")
        showMailErr.innerHTML = 'Please enter valid mail';
    }

    // Verify Password
    if (!verifyPass) {
        passInput.classList.add("err-msg")
        showPassErr.innerHTML = 'Please enter correct password';
    }
}

export const passChange = (e) => {

    let passType = e.target.previousElementSibling;

    if (passType.type === 'password') {
        e.target.classList.replace('fa-eye','fa-eye-slash');
        passType.type = 'text';
    }else{
        e.target.classList.replace('fa-eye-slash','fa-eye');
        passType.type = 'password';
    }
}
