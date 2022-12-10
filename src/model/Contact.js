const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Contact {

    static getByAcountId = async (accountID) => {
        try{
            let action = '/contacts/acount_id/'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const requestBody = {accountID}
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'GET',
                headers: headers,
                body: JSON.stringify(requestBody)
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
            console.log("In Contact, resonse = ", response)
            
            return response
        }
        catch(err){

            return null
        }
    }
    static getByEmail = async (email) => {
        try{
            let action = '/contacts/email/'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const requestBody = {email}
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'GET',
                headers: headers,
                body: JSON.stringify(requestBody)
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
            console.log("In Contact, resonse = ", response)
            
            return response
        }
        catch(err){

            return null
        }
    }
    static getByPhone = async (phone) => {
        try{
            let action = '/contacts/phone/'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const requestBody = {phone}
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'GET',
                headers: headers,
                body: JSON.stringify(requestBody)
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
            console.log("In Contact, resonse = ", response)
            
            return response
        }
        catch(err){

            return null
        }
    }
}