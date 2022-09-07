import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = styled.div`
    
   
`



export default function Product ({product, currentUser, addToCart}) {
    const navigate = useNavigate()

    const navToDetails = (id) => {
        if (currentUser) {
            navigate(`/products/${id}`)

        }
    }
    
   

    return (
        <ProductCard >
            <div onClick={e => navToDetails(product.id)}>
                <img src={product.image} alt={product.description} className="block mx-auto my-5 h-[150px]"></img>
                <h2 className='text-xl p-2'>{product.name}</h2>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
            </div>
            <div className='product-edit-link'>         
                {currentUser && currentUser.admin? <Link to={`/products/${product.id}`}>Edit/Delete </Link>: <button onClick={e => addToCart(product)}>Add to Cart</button>}
            </div >
        </ProductCard>
    )
}