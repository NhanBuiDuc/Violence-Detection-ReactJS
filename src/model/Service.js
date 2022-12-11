const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Service {

    static async getServiceList(){
            let action = '/services'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            let response = await fetch(myURL, {
                mode: 'cors',
                method: 'GET',
                headers: headers
            }).then(function(response){
                return response.json();
            }).then(function(myJson) {
                return myJson
            });
            console.log("In Service, resonse = ", response)
            return response
    }
    static async getAllCamerasOfService(service_id){
        let action = '/service_camera/cameras/'
        let json = "null"
        let myURL = baseURL + action
        let headers = new Headers();
        const requestBody = {service_id}
        headers.append('Content-Type', 'application/json');
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
        console.log("In Service, resonse = ", response)
        return response
    }
    static async getServiceByServiceId(service_id){
        let action = '/services/service_id'
        let json = "null"
        let myURL = baseURL + action
        let headers = new Headers();
        const requestBody = {service_id}
        headers.append('Content-Type', 'application/json');
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
        console.log("In Service, resonse = ", response)
        return response
    }
}