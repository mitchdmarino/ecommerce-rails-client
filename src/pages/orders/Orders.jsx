import { useEffect, useState } from "react"
import axios from "axios"

import Order from './components/Order'

export default function Orders () {
    const [orders, setOrders] = useState([])
    
    // make the auth headers 
    
    useEffect(() => {
        const token = localStorage.getItem('jwt')
        const options = {
            headers: {
                'Authorization': token
            }
        }
        axios.get(`${process.env.REACT_APP_SERVER_URL}/orders`, options)
            .then(response => {
                setOrders(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const orderList = orders.map((order, i) => {
        return (
            <Order key={i} item={order}/>
        )
    })

    return (
        <>
            <h1 className="text-5xl py-10">All Orders</h1>
            {orderList}
        </>
    )
}