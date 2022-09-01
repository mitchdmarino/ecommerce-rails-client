import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductCard = styled.div`
    background-color: blue;
    border: 2px solid black;
    color: white;
`



export default function Product ({product, currentUser}) {

    
    return (
        <ProductCard>
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <div className='product-edit-link'>
                {currentUser && currentUser.admin? <Link to={`/products/${product.id}`}>Edit/Delete </Link>: ''}
            </div >
        </ProductCard>
    )
}