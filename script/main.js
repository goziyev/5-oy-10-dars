import{ createCard} from './functions.js'

const wrapper = document.getElementById("wrapper")
document.addEventListener('DOMContentLoaded',function(){
    if (localStorage.getItem('user') && localStorage.getItem('accesToken')) {
        fetch("https://auth-rg69.onrender.com/api/products/all")
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                data.forEach(element => {
                    let card = createCard(element)
                    wrapper.innerHTML += card
                });
            }
        })
    }else{
        let url = window.location.href.substring(0,window.location.href.search('/pages'))
        window.location.assign(`${url}/pages/login.html`)
    }
})