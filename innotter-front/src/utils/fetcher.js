class TokenKeeper {
    constructor(takeAccess) {
        let user_obj = localStorage.getItem("user")
        if (user_obj === 'null') { //logout or no such user
            throw new Error('no user')
        }
        let user_obj_str = JSON.parse(user_obj)
        if (user_obj_str.access_token === undefined){
            throw new Error('not found')
        }
        this.token = takeAccess 
                    ? user_obj_str.access_token 
                    : user_obj_str.refresh_token
    }
}

export class Fetcher {
    constructor() {
        try{
            this.tokenKeeper = new TokenKeeper(true)
        }
        catch {
            this.tokenKeeper = null
        }
    }

    request_get = async (url) => {
        if (this.tokenKeeper === null) {
            return []
        }
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this.tokenKeeper.token
            },
        })
        if (response.status === 403) {
            this.tokenKeeper = new TokenKeeper(false)
            return this.request_get(url)
        }
        let data = await response.json()
        return (
            data
        )
    }


    request = async (url, method, body) => {
        if (this.tokenKeeper === null) {
            return []
        }
        let response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.tokenKeeper.token
            },
            body: JSON.stringify(body)
        })
        if (response.status === 403) {
            this.tokenKeeper = new TokenKeeper(false)
            return this.request_get(url)
        }
        let data = await response.json()
        console.log(data)
        return (
            data
        )
        }


    request_login_register = async (url, method, body) => {
        let response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        if (response.status === 401) {
            alert("no such user!")
            localStorage.setItem("user", null)
        }
        let data = await response.json()
        return (
            data
        )
    }
}
