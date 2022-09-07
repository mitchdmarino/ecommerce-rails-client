import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"

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
    let total = 0

    items.forEach(item => {
        total += item.price
    })
    
    return (
        <div className="cart min-h-screen">
            <h1 className="text-5xl p-10 text-left ml-20">Your Cart</h1>
            <hr></hr>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.length > 0? items.map((item, i) => {
                    return (
                        <div key={i}>                    
                            <img src={item.image} alt={item.description} className="block mx-auto my-5 h-[150px]"></img>
                            <h2 className='text-xl p-2'>{item.name}</h2>
                            <h3>${item.price}</h3>
                            <button onClick={e => removeFromCart(item.id)}><i className="icon-trash text-2xl"></i></button>
                        </div>
                    )
                }):<h2 className="text-4xl absolute ml-20">Currently Empty</h2>}
            </div>
            <h2 className="text-4xl text-left ml-20 my-20">Subtotal: ${total}.00</h2>
           
            
            <div className="ml-20">
                <Button onClick={submitOrder} color="success">
                    Submit Order
                </Button>

            </div>
            <div className="ml-20 mt-20">
                <Button onClick={emptyCart} color="failure">
                    Empty Cart
                </Button>

            </div>
        </div>
    )
}