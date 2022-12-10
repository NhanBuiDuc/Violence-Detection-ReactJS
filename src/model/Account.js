const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Account {

    static login = async (email, password) => {
        try{
            let action = '/login'
            let json = "null"
            URL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const loginBody = {email, password}
            let response = await fetch(URL, {
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
}