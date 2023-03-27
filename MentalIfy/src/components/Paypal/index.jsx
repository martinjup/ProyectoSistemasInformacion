import React, {useState} from "react";
import ReactDOM from "react-dom"
import { createReserve } from "../../controllers/reserveController";

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });


export function Paypal(reserve) { 
    // const reserve = reserve    
    // console.log(reserve.data.doctorid)
    const re = {
        doctorid: reserve.data.doctorid,
      userid: reserve.data.userid,
      date: reserve.data.date,
    }
    const id = reserve.data.reserveid
    console.log(re)
    console.log(id)

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

        return actions.order.capture(createReserve(re,id))

    }


    return (

        <PayPalButton

            createOrder={(data,actions)  =>  createOrder(data, actions)}

            onApprove={(data, actions) => onApprove(data, actions)}

        />

    );

}