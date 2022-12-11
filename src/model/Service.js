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
}