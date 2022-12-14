const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Account {

    static login = async (email, password) => {
        try{
            let action = '/login'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const loginBody = {email, password}
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(loginBody)
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
            console.log("In Account, resonse = ", response)
            json = response
            console.log("In Account, json = ", json)
            if(json.status === "200"){
                console.log("In Acount, in if")
                Account.setUserSession(json) 
            }
            return response
        }
        catch(err){

            return null
        }
    }
    static register = async (email, password, name, phone, address) => {
        try{
            let action = '/register'
            let myURL = baseURL + action

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const requestBody = {email, password, name, phone, address}
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestBody)
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
            console.log("In Account Register, resonse = ", response)
            return response
        }
        catch(err){

            return null
        }
    }

    static setUserSession(json){
        if(json != null){
            console.log("In Set session ", json)
            sessionStorage.setItem("currentUser", JSON.stringify(json.body))
        }
        else{
            console.log("In Set session ",this.body)
            console.log("No account logged in")
        }
    }
    static logOut(){
        sessionStorage.removeItem('currentUser');
    }
    
    static update = async (account_id, name, phone, address) => {
        try{
            let action = '/users/'
            let myURL = baseURL + action

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const requestBody = {account_id, name, phone, address}
            let updateResponse = await fetch(myURL, {
                mode:'cors',
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(requestBody)
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
            return updateResponse
        }
        catch(err){

            return null
        }
    }
    static getUserByAccountId = async (account_id) => {
        let action = '/users/id/'
        let myURL = baseURL + action

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const requestBody = {account_id}
        let response = await fetch(myURL, {
                mode:'cors',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestBody)
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
        return response
    }
}