const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Contact {

    static getByAcountId = async (account_id) => {
        console.log("In contact, account_id = ", account_id)
        let action = '/contacts/account_id/'
        let myURL = baseURL + action
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const requestBody = {account_id}
        console.log(JSON.stringify(requestBody))
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
        console.log("In Contact, resonse = ", response)
        
        return response
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
    static update = async (contact_id, email, phone, address) => {
        try{
            let action = '/contacts'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const requestBody = {contact_id, email, phone, address}
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'PUT',
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
    static add = async (contact_id, email, phone, address) => {
        try{
            let action = '/contacts'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const requestBody = {contact_id, email, phone, address}
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'PUT',
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