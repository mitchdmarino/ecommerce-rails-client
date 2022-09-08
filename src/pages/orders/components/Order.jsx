export default function Order ({item}) {
    const products = item.products.map((product, i) => {
        return (
            <div className="order-products flex w-[300px] mx-auto justify-between py-1" key={i}>
                    <p className="mx-2 text-lg">{product.name}</p>
                    <p className="text-lg">${product.price}.00</p>
            </div>
        )
    })

    let total = 0
    item.products.forEach(product => {
        total += product.price
    })
    
    return (
        <div className="my-10">
            <h1 className="text-xl">Order: {item.id}</h1>
            {products}
            <h2>Total: ${total}.00</h2>
            {item.fulfilled? <p className="text-green-300">Order Complete</p>: <p className="text-yellow-400">Order in progress</p>}
        </div>
    )
}