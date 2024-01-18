import { validateLogin } from "./functions.js"

const username = document.getElementById('username')
const password = document.getElementById('password')
const form  = document.getElementById("form")
const button = document.getElementById('btn')




button && button.addEventListener("click",function(e){
    e.preventDefault()//Yangilanib ketmasligi uchun;
    if(validateLogin(username,password)){
        let user = {
            username:username.value,
            email:"test@gmail.com",
            password:password.value
        }

        fetch("https://auth-rg69.onrender.com/api/auth/signin",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.message == "User Not found."){
                alert('User Not found.')
                username.focus();
            }
            if(data.message == "Invalid Password!"){
                alert('Invalid Password!')
                password.focus();
            }

            localStorage.setItem('accesToken', data.accessToken)
            localStorage.setItem('user',JSON.stringify(data))

            let url = window.location.href.substring(0,window.location.href.search('/pages'))
         window.location.assign(`${url}/index.html`)
        })
        .catch(err => {
            console.log(err);
        })

    }
    else{
        console.log("validadtsiyadan o'tmadi");
    }
})