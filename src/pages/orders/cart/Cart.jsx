export default function Cart ({items, removeFromCart, emptyCart}) {
    
    
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
        </div>
    )
}