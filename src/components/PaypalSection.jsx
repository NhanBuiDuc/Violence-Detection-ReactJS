import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Subcription from "../model/Subcription";

var baseURL = 'https://violence-detection-backend.vercel.app'
var controller = '/orders'
var URL = baseURL + controller

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};

const transactionSuccessful = async (data) => {
    let response = await Subcription.createSubcription(51,1)
    console.log("Resonse in login", response)
}
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount }) => {
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

export default function PaypalSection(props) {
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
                    amount={props.amount} 
                />
			</PayPalScriptProvider>
            <p>{props.amount}</p>
		</div>
	);
}