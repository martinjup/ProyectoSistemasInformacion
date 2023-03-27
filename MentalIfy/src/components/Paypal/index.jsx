import React, {useState} from "react";
import ReactDOM from "react-dom"

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });


export function Paypal() { 

    const price = 20

    const createOrder =  (data, actions) => {

        return actions.order.create({
            purchase_units: [
                {
                    amount:{
                        value: price
                    }
                }
            ]
        })

    }

    const onApprove =  (data, actions) => {
        // console.log('aprobado')

        return actions.order.capture(alert("Pago realizado exitosamente"))

    }


    return (

        <PayPalButton

            createOrder={(data,actions)  =>  createOrder(data, actions)}

            onApprove={(data, actions) => onApprove(data, actions)}

        />

    );

}