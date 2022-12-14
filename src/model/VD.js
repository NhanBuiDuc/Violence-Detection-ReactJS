const baseURL = 'http://localhost:8000'
export default class VD {
    static vd_start = async (id) => {
        try{
            let action = '/start'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const loginBody = {id}
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
            console.log("In VD, resonse = ", response)

            return response
        }
        catch(err){

            return null
        }
    }
    static vd_xd = async (id) => {
        try{
            let action = '/xd'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const loginBody = {id}
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
            return response
        }
        
        catch(err){

        }
    }
}