import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

var baseURL = 'https://violence-detection-backend.vercel.app'
var controller = '/orders'
var URL = baseURL + controller

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};

const transactionSuccessful = async (data) => {
    // Notification for back-end the transaction were success
    // try{

    //     const loginBody = {email, password, role}
    //     let response = await fetch(URL, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(loginBody)
    //     }).then(function(response){
    //         return response.json();
    //     }).then(function(myJson) {
    //         return myJson
    //     });

    //     if(response.status == "200"){
    //         console.log("Befor saving: ", response.body)
    //         sessionStorage.setItem("currentUser", JSON.stringify(response.body))
            
    //         setSuccess(true)    
    //         navigate("/")
    //     }
    //     else if(response.status == "404"){
    //         setErrMsg(response.message)
    //         console.log(response.message)
    //         errRef.current.focus();
    //     }
    //     else if (!response) {
            
    //         setErrMsg('No Server Response');
    //         console.log("No Server Response")
    //         errRef.current.focus();
    //     } 
    //     else if (response.status == 400) {
    //         setErrMsg('Missing Username or Password');
    //         console.log("Missing Username or Password")
    //         errRef.current.focus();
    //     } 
    //     else if (response.status == 401) {
    //         setErrMsg('Unauthorized');
    //         console.log("Unauthorized")
    //         errRef.current.focus();
    //     } 
    // }
    // catch(err){
    //     if (!err?.response) {
    //         setErrMsg('No Server Response');
    //     } else if (err.response?.status === 400) {
    //         setErrMsg('Missing Username or Password');
    //     } else if (err.response?.status === 401) {
    //         setErrMsg('Unauthorized');
    //     } else {
    //         setErrMsg('Login Failed');
    //     }
    //     console.log("in catch")
    //     errRef.current.focus();
    // }
    // => send data to order and order-service table
    // => Redirect to profile page
}
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            console.log("orderid ", orderId)
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order'
                        console.log("data ", data)
                        console.log("action ", actions)
                        transactionSuccessful(data)
                    });
                }}
            />
        </>
    );
}

export default function PaypalSection() {
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
	);
}