const baseURL = 'https://violence-detection-backend.vercel.app'

export default class Camera_Event {
    static insertCameraEvent = async (working_camera_id, rate, start) => {
        try{

            const location = "Viet Nam"
            const name = "Anomally Action"

            let action = '/camera_event'
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const loginBody = {working_camera_id, rate, start, location, name}
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
            return response
        }
        catch(err){

            return null
        }
    }
    static getCameraEventByWorkingId = async (working_camera_id) => {
        try{
            let action = '/camera_event'
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const loginBody = {working_camera_id}
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
            return response
        }
        catch(err){

            return null
        }
    }
}
