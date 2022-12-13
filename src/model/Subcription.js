const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Subcription {
    static async createSubcription(account_id, service_id){
            let action = '/subcriptions'
            let myURL = baseURL + action

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const requestBody = {account_id, service_id}
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
            console.log("In CreateSubcription, resonse = ", response)
            return response
    }
    static async getSubcriptionByAccountId(account_id){
        let action = '/subcriptions/account_id/'
        let myURL = baseURL + action

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const requestBody = {account_id, service_id}
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
        console.log("In CreateSubcription, resonse = ", response)
        return response
}
}