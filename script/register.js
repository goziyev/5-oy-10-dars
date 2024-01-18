import { validate } from "./functions.js"

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword =document.getElementById('confirm')
const form  = document.getElementById("form")
const button = document.getElementById('btn')




button && button.addEventListener("click",function(e){
    e.preventDefault()//Yangilanib ketmasligi uchun;
    if(validate(username,email,password,confirmPassword)){
        let user = {
            username:username.value,
            email:email.value,
            password:password.value
        }

        fetch("https://auth-rg69.onrender.com/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.message == 'Failed! Username is already in use!') {
                alert('Failed! Username is already in use!')
                username.focus()
            }

            if (data.message == 'User registered successfully!') {
            let url = window.location.href.substring(0,window.location.href.search('/pages'))
                window.location.assign(`${url}/pages/login.html`)
                form.reset();
            }
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })

    }
    else{
        console.log("validadtsiyadan o'tmadi");
    }
})