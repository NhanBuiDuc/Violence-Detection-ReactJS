const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Account {


    static login = async (email, password) => {
        try{
            let action = '/login'
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
            if(response != null){
                this.status = response.status
                this.message = response.message
                this.body = response.body
            }
            return response
        }
        catch(err){

            return null
        }
    }
    setUserSession(){
        if(this.body != null){
            sessionStorage.setItem("currentUser", JSON.stringify(this.body))
        }
        else{
            console.log("No account logged in")
        }
    }
}