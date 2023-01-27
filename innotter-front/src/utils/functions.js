export const signin = async () => {
    // e.preventDefault()
    let response = await fetch('http://127.0.0.1:8000/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            // body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
    // let data = await response.json()
    return(
        response.body
    );
};