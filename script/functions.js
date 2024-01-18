
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate(username,email,password,confirmPassword){


    if (!username.value || !username.value.trim()) {
        alert("Username kiritilishi shart!!!")
        username.focus();
        username.value = ""
        return false
    }
    if (!email.value || !email.value.trim()) {
        alert("email kiritilishi shart!!!")
        email.focus();
        email.value = ""
        return false
    }
    if (!password.value || !password.value.trim()) {
        alert("password kiritilishi shart!!!")
        password.focus();
        password.value = ""
        return false
    }
    if (!confirmPassword.value || !confirmPassword.value.trim()) {
        alert("Username kiritilishi shart!!!")
        confirmPassword.focus();
        confirmPassword.value = ""
        return false
    }
    if (password.value != confirmPassword.value) {
        alert("Parollar bir biriga mos kelmadi !!!")
        password.focus();
        confirmPassword.value  = "";

        return false
    }
    if (!validateEmail(email.value)) {
        alert("Email notog'ri kiritildi")
        email.focus();
        return false
    }


    return true
}

function validateLogin(username,password){
  
    if (!username.value || !username.value.trim()) {
        alert("Username kiritilishi shart!!!")
        username.focus();
        username.value = ""
        return false
    }
    if (!password.value || !password.value.trim()) {
        alert("password kiritilishi shart!!!")
        password.focus();
        password.value = ""
        return false
    }
    return true
}
function createCard(data){
    return `
    <div id="card">
    <img width='250' src="data:image/jpeg;base64,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" />
    <p id="title"> <small>nomi: </small>${data.name}</p>
    <p id="description"><small>izoh: </small> ${data.description ? data.description : "Bu mahsulot boyicha qoshimcha malumotlar mavjud emas"}</p>
    <p id="price"><small>narxi: </small> ${data.price}</p>
    <button class="detail">Batafsil</button>
</div>`
}


export {validate,validateLogin,createCard}