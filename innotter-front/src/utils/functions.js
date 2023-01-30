import Cookies from 'js-cookie'


export const signin = async (username, password) => {
    // let refresh_token = Cookies.get('refreshtoken')
    // console.log("refresh", refresh_token)
    let response = await fetch('http://127.0.0.1:8000/login', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'username': username, 'password': password})
    })
    if (response.status === 401) {
        alert("no such user!")
        localStorage.setItem("user", null)
    }
    return(
        await response.json()
    );
};


export const register = async (username, password, confirm_pass, email, first_name, last_name) => {
    let response = await fetch('http://127.0.0.1:8000/register', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'username': username, 'password': password, 'password2': confirm_pass, 'email': email, 'first_name': first_name, 'last_name': last_name})
    })
    let data = await response.json()
    return(
        data
    );
};


export const users = async () => {
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch('http://127.0.0.1:8000/users', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': token
        },
    })
    let data = await response.json()
    return(
        data
    );
};