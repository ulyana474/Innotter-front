import { format } from 'react-string-format';
import Cookies from 'universal-cookie';
import uuid from 'react-uuid';


export const signin = async (username, password) => {
    // const cookies = new Cookies();
    // console.log(cookies.get('refreshtoken'));
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


export const userRetrieve = async (pk) => {
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch(format('http://127.0.0.1:8000/users/{0}', pk), {
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


export const pages = async () => {
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch('http://127.0.0.1:8000/pages', {
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


export const create_page = async (name, description, uuidValue) => {
    uuidValue = uuid().slice(0, 15)
    console.log(uuidValue)
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch('http://127.0.0.1:8000/pages/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': token
        },
        body: JSON.stringify({'name': name, 'description': description, 'uuid': uuidValue})
    })
    let data = await response.json()
    return(
        data
    );
};


export const posts = async () => {
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch('http://127.0.0.1:8000/posts', {
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


export const create_post = async (page, content) => {
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch('http://127.0.0.1:8000/posts/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': token
        },
        body: JSON.stringify({'page': page, 'content': content})
    })
    let data = await response.json()
    return(
        data
    );
};


export const tags = async () => {
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch('http://127.0.0.1:8000/tags', {
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


export const create_tag = async (tag_name, page_name) => {
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let token = user_obj["access_token"]
    let response = await fetch(format('http://127.0.0.1:8000/pages/{0}/tagCreate/?tag={1}', page_name, tag_name), {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            'Authorization': token
        },
        body: JSON.stringify({'name': tag_name})
    })
    let data = await response.json()
    return(
        data
    );
};