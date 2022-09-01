export default function Cart ({items}) {
    
    
    return (
        <div className="cart">
            {items.map((item, i) => {
                return (
                    <div key={i}>                    
                        <h1>{item.name}</h1>
                        <p>{item.price}.00</p>
                    </div>
                )
            })}
        </div>
    )
}