export const signin = async (username, password) => {
    let response = await fetch('http://127.0.0.1:8000/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username': username, 'password': password})
        })
    return(
        await response.json()
    );
};