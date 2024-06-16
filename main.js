// targeting element 
const inputName = document.getElementById('name');
const inputPass = document.getElementById('pass');
const submitBtn = document.querySelector('#btn');
const contentForm = document.querySelector('.content');
const labelFormFirst = document.getElementsByTagName('label')[0];
const labelForm = document.getElementsByTagName('label')[1];

// event listener if user submit the button
submitBtn.addEventListener("click",function(){
    
    // logic login
    if (inputName.value && inputPass.value !== ""){
        localStorage.setItem('username',inputName.value);
        localStorage.setItem('password',inputPass.value);

        inputName.style.display = "none";
        inputPass.style.display = "none";

        labelFormFirst.innerHTML = "ANDA LOGIN SEBAGAI:"
        labelForm.innerHTML = inputName.value;

        submitBtn.style.display = "none";
        let closedBtn = document.createElement('button');
        closedBtn.classList.add('btn');
        closedBtn.innerText = "logout"
        contentForm.appendChild(closedBtn);

        addMessage();

        closedBtn.addEventListener('click',function(){
            localStorage.clear();
            window.location.reload();
        })
    }
})

// create Message
function addMessage(){
    const message = document.createElement('div');
    message.classList.add('message');

    const headerMessage = document.createElement('div');
    headerMessage.classList.add('header');

    const hFive = document.createElement('h5');
    const spanx = document.createElement('span');
    const para = document.createElement('p');

    hFive.textContent = `message`;
    spanx.textContent = `x`
    para.textContent = `your login as user : ${inputName.value}`

    message.appendChild(headerMessage);
    headerMessage.appendChild(hFive);
    headerMessage.appendChild(spanx);
    message.appendChild(para)
    contentForm.appendChild(message);

    spanx.addEventListener('click',function(e){
        message.style.display ='none'
    })
}
