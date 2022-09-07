import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Cart ({items, removeFromCart, emptyCart, currentUser}) {
    const navigate = useNavigate()
    const submitOrder = () => {
        if (currentUser) {
            const productIDs = []
            items.forEach(item => {
                productIDs.push(item.id)
            })
            const token = localStorage.getItem('jwt')
            // make the auth headers 
            const options = {
                headers: {
                    'Authorization': token
                }
            }
            axios.post(`${process.env.REACT_APP_SERVER_URL}/orders`, {product_ids: productIDs}, options)
                .then(response => {
                    console.log(response)
                    navigate("/orders")
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            navigate('/login')
        }
        
        
    }
    
    return (
        <div className="cart">
            {items? items.map((item, i) => {
                return (
                    <div key={i}>                    
                        <h1>{item.name}</h1>
                        <p>{item.price}.00</p>
                        <button onClick={e => removeFromCart(item.id)}>Remove</button>
                    </div>
                )
            }):''}
            <button onClick={emptyCart}>Empty Shopping Cart</button>
            <button onClick={submitOrder}>Submit Order</button>
        </div>
    )
}