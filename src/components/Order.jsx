export default function Order ({item}) {
    const products = item.products.map((product, i) => {
        return (
            <div className="order-products" key={i}>
                <ul>
                    <li>{product.name}</li>
                    <li>${product.price}.00</li>
                </ul>
            </div>
        )
    })
    
    return (
        <>
            <h1>Order: {item.id}</h1>
            {products}

        </>
    )
}