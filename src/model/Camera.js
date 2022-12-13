const baseURL = 'https://violence-detection-backend.vercel.app'
export default class Camera {
    static getCameraByCameraId = async (camera_id) => {
        try{
            let action = '/login'
            let json = "null"
            let myURL = baseURL + action
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const loginBody = {camera_id}
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
}